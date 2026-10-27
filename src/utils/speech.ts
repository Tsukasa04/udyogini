/**
 * Text-to-Speech audio reader utility for Udyogini.
 * Supports Marathi (mr-IN), Hindi (hi-IN), and English (en-IN).
 */

let currentUtterance: SpeechSynthesisUtterance | null = null;

export function speakText(text: string, lang: 'mr' | 'hi' | 'en', onEnd?: () => void) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser.');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  // Strip markdown, html tags or bullet symbols
  const cleanText = text
    .replace(/[#*_~`]/g, '')
    .replace(/<[^>]*>/g, '')
    .replace(/[•·-]/g, ' ')
    .trim();

  if (!cleanText) return;

  const utterance = new SpeechSynthesisUtterance(cleanText);
  currentUtterance = utterance;

  // Language mapping
  const langCode = lang === 'mr' ? 'mr-IN' : lang === 'hi' ? 'hi-IN' : 'en-IN';
  utterance.lang = langCode;
  utterance.rate = 0.95; // Slightly slower, clear pace
  utterance.pitch = 1.0;

  // Try to find native regional voice if available
  const voices = window.speechSynthesis.getVoices();
  const regionalVoice = voices.find(
    (v) => v.lang.startsWith(lang === 'mr' ? 'mr' : lang === 'hi' ? 'hi' : 'en')
  );
  if (regionalVoice) {
    utterance.voice = regionalVoice;
  }

  utterance.onend = () => {
    currentUtterance = null;
    if (onEnd) onEnd();
  };

  utterance.onerror = () => {
    currentUtterance = null;
    if (onEnd) onEnd();
  };

  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    currentUtterance = null;
  }
}

export function isSpeaking(): boolean {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    return window.speechSynthesis.speaking;
  }
  return false;
}

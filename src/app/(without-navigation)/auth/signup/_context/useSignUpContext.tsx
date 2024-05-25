import { useContext } from 'react';
import { SignUpContext } from './signup-context';

export function useSignUpContext() {
  const context = useContext(SignUpContext);
  if (context === undefined) {
    throw new Error('useSignUpContext must be used within a SignUpProvider');
  }
  return context;
}

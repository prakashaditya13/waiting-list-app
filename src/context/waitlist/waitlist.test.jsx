import React, { useContext } from 'react';
import { renderHook, act } from '@testing-library/react';
import { WaitlistProvider, WaitlistContext } from '.';

describe('WaitlistProvider', () => {
    // Adding a new user without invite code places them at end of waitlist
    it('should add non-priority user to end of waitlist when no invite code provided', () => {
      const wrapper = ({ children }) => (
        <WaitlistProvider>{children}</WaitlistProvider>
      );

      const { result } = renderHook(() => useContext(WaitlistContext), { wrapper });

      act(() => {
        result.current.CreateUser('Test User');
      });

      expect(result.current.users).toHaveLength(1);
      expect(result.current.users[0]).toEqual({
        id: 1,
        name: 'Test User',
        inviteCode: null,
        position: 1,
        isPriority: false
      });
    });

    // Adding user with invalid/non-existent invite code treats them as non-priority
    it('should treat user as non-priority when invalid invite code provided', () => {
      const wrapper = ({ children }) => (
        <WaitlistProvider>{children}</WaitlistProvider>
      );

      const { result } = renderHook(() => useContext(WaitlistContext), { wrapper });

      act(() => {
        result.current.CreateUser('Priority User', 'INVALID_CODE');
      });

      expect(result.current.users).toHaveLength(1);
      expect(result.current.users[0]).toEqual({
        id: 1,
        name: 'Priority User', 
        inviteCode: 'INVALID_CODE',
        position: 1,
        isPriority: false
      });
    });
    
});

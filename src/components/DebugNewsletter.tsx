import { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../utils/firebase';

const DebugNewsletter = () => {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState<string | null>(null);

  const testWrite = async () => {
    setStatus('testing');
    setError(null);
    console.log('Starting Firestore write test...');
    
    try {
      const docRef = await addDoc(collection(db, 'newsletter_subscriptions'), {
        email: 'test@example.com',
        subscribedAt: serverTimestamp(),
        source: 'debug_test'
      });
      console.log('Document written with ID: ', docRef.id);
      setStatus('success');
    } catch (e: any) {
      console.error('Error adding document: ', e);
      setStatus('error');
      
      let msg = e.message;
      if (e.code === 'permission-denied') {
        msg = 'Permission Denied: Firestore Security Rules blocked the write.';
      }
      setError(msg);
    }
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg my-4 border border-gray-700">
      <h3 className="text-white font-bold mb-2">Debug Firestore Write</h3>
      <button 
        onClick={testWrite}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Test Write Permission
      </button>
      
      {status === 'success' && (
        <p className="text-green-400 mt-2">Success! Check Firestore console for 'newsletter_subscriptions'.</p>
      )}
      
      {status === 'error' && (
        <div className="mt-2 text-red-400">
          <p className="font-bold">Write Failed:</p>
          <p className="font-mono text-sm">{error}</p>
        </div>
      )}
    </div>
  );
};

export default DebugNewsletter;


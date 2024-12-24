import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../../lib/supabase';
import DeleteConfirmModal from './DeleteConfirmModal';

export default function DeleteButton({ solution, isOwner }) {
  const [showModal, setShowModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  if (!isOwner) return null;

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      setError(null);

      // Delete the solution
      const { error: deleteError } = await supabase
        .from('solutions')
        .delete()
        .eq('id', solution.id);

      if (deleteError) throw deleteError;

      // Navigate to dashboard after successful deletion
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
        disabled={isDeleting}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
        {isDeleting ? 'Deleting...' : 'Delete Solution'}
      </button>

      <DeleteConfirmModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
        isDeleting={isDeleting}
        error={error}
      />
    </>
  );
}
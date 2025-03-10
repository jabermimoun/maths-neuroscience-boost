
import React from 'react';
import { Button } from '@/components/ui/button';

interface AdminPasswordPromptProps {
  adminPassword: string;
  setAdminPassword: (password: string) => void;
  checkPassword: () => void;
  onCancel: () => void;
}

const AdminPasswordPrompt: React.FC<AdminPasswordPromptProps> = ({
  adminPassword,
  setAdminPassword,
  checkPassword,
  onCancel
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h3 className="text-xl font-bold mb-4">Accès administrateur</h3>
        <p className="mb-4">Veuillez entrer le mot de passe pour accéder à la section d'administration.</p>
        <input
          type="password"
          value={adminPassword}
          onChange={(e) => setAdminPassword(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 mb-4"
          placeholder="Mot de passe"
          onKeyDown={(e) => e.key === 'Enter' && checkPassword()}
        />
        <div className="flex justify-end gap-2">
          <Button 
            variant="outline" 
            onClick={onCancel}
          >
            Annuler
          </Button>
          <Button onClick={checkPassword}>
            Confirmer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminPasswordPrompt;

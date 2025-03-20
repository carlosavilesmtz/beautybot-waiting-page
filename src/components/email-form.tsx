// src/components/email-form.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import axios from 'axios';

export function EmailForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Por favor ingresa tu correo electrónico');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // URL de tu workflow de n8n
      const n8nWebhookUrl = 'https://chatbot-n8n.chovfm.easypanel.host/webhook/waiting-page';
      
      await axios.post(n8nWebhookUrl, { email });
      
      setSuccess(true);
      setEmail('');
    } catch (err) {
      setError('Ocurrió un error al enviar tu correo. Inténtalo de nuevo.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto border-[#F4BEF3]">
      <CardContent className="pt-6">
        {success ? (
          <div className="text-center p-4">
            <h3 className="text-lg font-medium text-[#F4BEF3]">¡Gracias por suscribirte!</h3>
            <p className="mt-2">Te notificaremos cuando lancemos.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-center">Sé el primero en enterarte cuando lancemos</h3>
              <p className="text-sm text-gray-500 text-center">
                Regístrate para recibir actualizaciones y acceso anticipado.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow border-[#F7D0F7] focus-visible:ring-[#F4BEF3]"
              />
              <Button 
                type="submit" 
                disabled={loading}
                className="bg-[#F4BEF3] hover:bg-[#F7D0F7] text-white"
              >
                {loading ? 'Enviando...' : 'Notifícame'}
              </Button>
            </div>
            
            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}
          </form>
        )}
      </CardContent>
    </Card>
  );
}
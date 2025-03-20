// src/app/page.tsx
import { Logo } from '@/components/logo';
import { EmailForm } from '@/components/email-form';
import { SocialIcons } from '@/components/social-icons';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="w-full max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <Logo />
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Muy pronto</h1>
          <p className="text-lg text-gray-600 mb-8">
            Lo tuyo es la belleza, lo nuestro es agendar.
          </p>
        </div>
        
        <EmailForm />
        
        <div className="mt-10">
          <p className="text-center text-sm text-gray-500 mb-4">
            Síguenos en nuestras redes sociales
          </p>
          <SocialIcons />
        </div>
      </div>
    </main>
  );
}
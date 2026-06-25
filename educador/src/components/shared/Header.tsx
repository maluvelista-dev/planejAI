import { Clock, TrendingUp, Wallet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Button } from './Button';

export function Header() {
  const navigate = useNavigate();
  return (
    <header className="border-b border-(--border) px-6 py-3">
      <nav className="flex items-center justify-between">
        <div className="justiy-between flex items-center">
          <div className="bg-primary flex h-9 w-9 items-center justify-center rounded-full">
            <Wallet size={20} className="text-primary-foreground" />
          </div>
          <span className="text-lg">
            <span className="text-muted-foreground pl-3 font-medium">
              Planej
            </span>
            <span className="font-extrabold">AI</span>
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="secondary"
            icon={TrendingUp}
            onClick={() => void navigate('/')}
          >
            <span className="hidden sm:inline">Nova Simulação</span>

            <Button
              variant="ghost"
              icon={Clock}
              onClick={() => void navigate('/historico')}
            >
              <span className="hidden sm:inline">Histórico</span>
            </Button>
          </Button>
        </div>
      </nav>
    </header>
  );
}

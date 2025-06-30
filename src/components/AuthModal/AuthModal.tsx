import React from 'react';
import styles from './AuthModal.module.css';
import { type ModalType } from './AuthModal.types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalType: ModalType;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, modalType }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <h2>{modalType === 'signup' ? 'Регистрация' : 'Вход'}</h2>
        <form>
          {modalType === 'signup' && (
            <input type="text" placeholder="Имя пользователя" required />
          )}
          <input
            type="email"
            placeholder="Электронная почта"
            required
          />
          <input type="password" placeholder="Пароль" required />
          <button type="submit">
            {modalType === 'signup' ? 'Зарегистрироваться' : 'Войти'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;

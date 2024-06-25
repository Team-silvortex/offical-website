'use client'
import { useState } from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '关闭菜单' : '打开菜单'}
      </button>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <ul>
          <li>菜单项 1</li>
          <li>菜单项 2</li>
          <li>菜单项 3</li>
        </ul>
      </div>
    </div>
  );
}

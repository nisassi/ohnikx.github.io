import React, { useEffect, useState } from 'react';
import { Cpu, HardDrive, Zap, Monitor, Mouse, Keyboard, Headphones, Box } from 'lucide-react';
import './Equipment.css';

const Equipment = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 600);
  }, []);

  const equipment = [
    { icon: Cpu, label: 'CPU', value: 'Intel Core i7-12700KF' },
    { icon: HardDrive, label: 'RAM', value: '16GB DDR4 3200MHz' },
    { icon: HardDrive, label: 'Storage', value: '1TB NVMe SSD' },
    { icon: Zap, label: 'GPU', value: 'NVIDIA RTX 5070' },
    { icon: Zap, label: 'PSU', value: '750W 80+ Gold' },
    { icon: Mouse, label: 'Mouse', value: 'Logitech G Pro X Superlight 2' },
    { icon: Keyboard, label: 'Keyboard', value: 'Attack Shark X65 HE' },
    { icon: Mouse, label: 'Tablet', value: 'Wacom CTL-4100WL' },
    { icon: Box, label: 'Case', value: 'iTek Cosmic 23' },
    { icon: Monitor, label: 'Monitor', value: 'Samsung Odyssey G4' },
    { icon: Headphones, label: 'Headphones', value: 'HyperX Cloud III' }
  ];

  return (
    <div className={`equipment ${isVisible ? 'fade-in-up' : ''}`}>
      <h2 className="section-title">Equipment Setup</h2>
      <div className="equipment-grid">
        {equipment.map((item, index) => (
          <div key={index} className="equipment-item">
            <item.icon className="equipment-icon" size={28} />
            <div className="equipment-info">
              <span className="equipment-label">{item.label}</span>
              <span className="equipment-value">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipment;

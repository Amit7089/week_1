// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const CollapsibleCategories = () => {
  const categories = [
    {
      name: 'Lighting',
      path: '/lighting',
      subcategories: [
        { name: 'LED Bulbs', path: '/lighting/led-bulbs' },
        { name: 'Tube Lights', path: '/lighting/tube-lights' },
        { name: 'Ceiling Lights', path: '/lighting/ceiling-lights' },
      ],
    },
    {
      name: 'Wiring & Cables',
      path: '/wiring-cables',
      subcategories: [
        { name: 'Copper Wires', path: '/wiring-cables/copper-wires' },
        { name: 'Flexible Cables', path: '/wiring-cables/flexible-cables' },
        { name: 'Coaxial Cables', path: '/wiring-cables/coaxial-cables' },
      ],
    },
  ];

  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (categoryName) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category.name} style={{ listStyle: 'none', marginBottom: '10px' }}>
            <div
              onClick={() => toggleCategory(category.name)}
              style={{
                cursor: 'pointer',
                fontWeight: '400', // Adjusted font weight
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>{category.name}</span>
              <span>{expandedCategories[category.name] ? '-' : '+'}</span>
            </div>
            {expandedCategories[category.name] && (
              <ul style={{ marginLeft: '20px', marginTop: '5px' }}>
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory.name}>
                    <a href={subcategory.path}>{subcategory.name}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollapsibleCategories;

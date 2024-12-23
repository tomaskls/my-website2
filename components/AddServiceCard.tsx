'use client';
import type { AdService } from '@/components/constants/addSevises';

import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  service: AdService;
  index: number;
  platform: 'google' | 'meta';
}

export const ServiceCard = ({ service, platform }: ServiceCardProps) => {
  return (
    <motion.div
      className={`
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    initial={{ opacity: 0, y: 20 }}
    ref={ref}
      transition={{ duration: 0.5, delay: index * 0.2 }}
        backdrop-blur-sm hover:shadow-lg transition-all duration-300
        border rounded-lg p-6
        ${
          platform === 'google'
            ? 'bg-gradient-to-r from-teal-50/90 via-fuchsia-50/90 to-amber-50/90 hover:from-teal-100/90 hover:via-fuchsia-100/90 hover:to-amber-100/90 dark:from-red-900 dark:to-red-900 dark:hover:from-red-950 dark:hover:to-amber-800/90 border-teal-200 dark:border-slate-700'
            : 'bg-gradient-to-r from-amber-50/90 via-fuchsia-50/90 to-teal-50/90 hover:from-amber-100/90 hover:via-fuchsia-100/90 hover:to-teal-100/90 dark:from-red-900 dark:to-red-900 dark:hover:from-red-950 dark:hover:to-amber-800/90 border-fuchsia-200 dark:border-slate-700'
        }
        transform hover:scale-[1.02]
        hover:shadow-xl hover:shadow-white/10
      `}
    >
      <h3
        className={`text-xl font-semibold mb-2 ${
          platform === 'google'
            ? 'bg-gradient-to-r from-teal-800 via-fuchsia-800 to-amber-800 dark:from-teal-200 dark:via-fuchsia-200 dark:to-amber-200 bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-amber-800 via-fuchsia-800 to-teal-800 dark:from-amber-200 dark:via-fuchsia-200 dark:to-teal-200 bg-clip-text text-transparent'
        }`}
      >
        {service.title}
      </h3>
      <p className="mb-4 text-sm text-slate-700 dark:text-gray-300">
        {service.description}
      </p>
      <ul className="space-y-2">
        {service.features.map((feature, i) => (
          <li
            key={i}
            className="text-sm flex items-center text-slate-700 dark:text-gray-100"
          >
            <span
              className={`w-1.5 h-1.5 rounded-full mr-2 ${
                platform === 'google'
                  ? 'bg-gradient-to-r from-teal-500 via-fuchsia-500 to-amber-500'
                  : 'bg-gradient-to-r from-amber-500 via-fuchsia-500 to-teal-500'
              }`}
            />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

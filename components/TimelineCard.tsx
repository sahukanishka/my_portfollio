import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

interface TimelineCardProps {
  role: string;
  company: string;
  logo: React.ReactNode;
  startDate: string;
  endDate: string;
  description: string;
  isLeft: boolean;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  role,
  company,
  logo,
  startDate,
  endDate,
  description,
  isLeft,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 ${
        isLeft ? "text-right" : "text-left"
      }`}
    >
      <div
        className={`flex items-center gap-4 mb-4 ${
          isLeft ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 flex-shrink-0">
          {logo}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{role}</h3>
          <h4 className="text-indigo-600 font-medium">{company}</h4>
        </div>
      </div>

      <div
        className={`flex items-center text-sm text-gray-500 mb-3 ${
          isLeft ? "justify-end" : "justify-start"
        }`}
      >
        <Calendar className="w-4 h-4 mr-1" />
        <span>
          {startDate} - {endDate}
        </span>
      </div>

      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default TimelineCard;

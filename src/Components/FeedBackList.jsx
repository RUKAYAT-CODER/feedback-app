import React from "react";
import { useContext, useState } from "react";
import FeedbackContext from "../FeedbackContext";
import FeedBackItems from "./FeedBackItems";
import { AnimatePresence, motion } from "framer-motion";

function FeedBackList({ deleteFeedback }) {
  const {feedback} = useContext(FeedbackContext)
  const [reverse, setReverse] = useState(false);

  return (
    <div>
      {/* FeedBackList */}
      <AnimatePresence>
        {feedback.map((list, index) => {
          return (
            <motion.div
              key={list.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedBackItems
                key={index}
                item={list}
                deleteFeedback={deleteFeedback}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default FeedBackList;

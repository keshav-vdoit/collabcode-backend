// import { useCallback, useEffect, useMemo, useRef } from 'react';

// import { AnimatePresence, motion } from 'framer-motion';
// import { Scrollbars } from 'react-custom-scrollbars-2';
// import { Link } from 'react-router-dom';
// import { useWindowSize } from 'usehooks-ts';

// import { Button } from '@/components/ui/button';
// import { ResponseLoading } from '@/components/ui/response-loading';
// import { PATHS } from '@/constants/page-paths';
// import { formatChatResponse } from '@/lib/helpers/formatChatResponse';
// import { useChatStore } from '@/store';

// export const BubbleEdge = ({ isUser }) => {
//   return (
//     <svg
//       width="20"
//       height="10"
//       viewBox="0 0 20 10"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className={`${isUser ? '-right-2' : '-left-2'} absolute top-0 rotate-180`}
//     >
//       <path
//         d="M0 10L10 0L20 10H0Z"
//         className={isUser ? 'fill-secondary' : 'fill-muted'}
//       />
//     </svg>
//   );
// };

// export const ChatMessages = ({
//   messages,
//   isLoading,
//   twinData,
// }) => {
//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const { audioEnabled, category, audio } = useChatStore();

//   const { width } = useWindowSize();

//   const scrollToBottom = useCallback(
//     (behavior) => {
//       if (messagesEndRef.current) {
//         messagesEndRef.current.scrollIntoView({
//           behavior,
//           block: 'end',
//         });
//       }
//     },
//     []
//   );

//   useEffect(() => {
//     scrollToBottom('smooth');
//   }, [messages, scrollToBottom]);

//   const ChatAlert = ({ id, message }) => {
//     const renderContent = () => {
//       if (id === 'noSubscription') {
//         return <SubscribeTwin twinData={twinData} />;
//       } else if (id === 'insufficientPoints') {
//         return (
//           <Link to={PATHS.BUY_POINTS}>
//             <Button>Buy Points</Button>
//           </Link>
//         );
//       } else if (id === 'freeQuestionsOver') {
//         return (
//           <p className="text-destructive text-xs md:text-md">
//             Your free questions limit has been reached, you will be charged for
//             further questions
//           </p>
//         );
//       }

//       return null;
//     };

//     return (
//       <div className="bg-muted rounded-xl rounded-tl-none py-1.5 px-2.5 md:px-4 md:py-2 w-fit min-w-72 h-auto flex flex-col relative">
//         <BubbleEdge isUser={false} />
//         <div className="mb-1 md:mb-2">
//           <h6 className="text-sm md:text-base">{message}</h6>
//           {id !== 'freeQuestionsOver' && id !== 'insufficientPoints' && (
//             <p className="text-xs md:text-sm">Your free questions are over</p>
//           )}
//           {id === 'insufficientPoints' && (
//             <p className="text-xs md:text-sm">
//               You don't have enough points to chat
//             </p>
//           )}
//         </div>
//         {renderContent()}
//       </div>
//     );
//   };

//   const renderMessage = useMemo(() => {
//     return (
//       <div className="space-y-5 flex-1 px-4 sm:px-6 h-auto overflow-hidden py-2 mb-6">
//         <AnimatePresence>
//           {isLoading ? (
//             <div className="bg-muted rounded-xl rounded-tl-none py-1.5 px-2.5 md:px-4 md:py-2 w-full lg:w-1/2 h-auto relative mb-6 ">
//               <BubbleEdge isUser={false} />
//               <ResponseLoading />
//             </div>
//           ) : (
//             !messages.length && (
//               <p className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//                 Start your conversation
//               </p>
//             )
//           )}

//           {messages.map(({ id, sender, message }, index) => {
//             if (id === 'loader') {
//               return (
//                 <div
//                   key={id}
//                   className="bg-muted rounded-xl rounded-tl-none py-1.5 px-2.5 md:px-4 md:py-2 w-full lg:w-1/2 h-auto relative"
//                 >
//                   <BubbleEdge isUser={false} />
//                   <ResponseLoading />
//                 </div>
//               );
//             }

//             if (
//               id === 'freeQuestionsOver' ||
//               id === 'noSubscription' ||
//               id === 'insufficientPoints'
//             ) {
//               return <ChatAlert key={id} id={id} message={message} />;
//             }

//             const isUser = sender === 'user';

//             const chatBubbleClass = cn(
//               'break-words whitespace-pre-wrap max-w-[90%] rounded-xl py-1.5 px-2.5 md:px-4 md:py-2 w-fit relative text-xs sm:text-sm lg:text-base',
//               isUser
//                 ? 'rounded-tr-none bg-secondary'
//                 : 'rounded-tl-none bg-muted flex flex-col gap-2'
//             );

//             const alignmentClass = isUser
//               ? 'flex justify-end'
//               : 'flex justify-start';
//             const initialTransform = isUser
//               ? { translateY: 50, rotate: -10 }
//               : { translateY: 50, rotate: 10 };
//             const exitTransform = isUser
//               ? { translateY: -50, rotate: 10 }
//               : { translateY: -50, rotate: -10 };

//             return (
//               <motion.div
//                 key={id}
//                 initial={{ opacity: 0, scale: 0.8, ...initialTransform }}
//                 animate={{ opacity: 1, translateY: 0, scale: 1, rotate: 0 }}
//                 exit={{ opacity: 0, scale: 0.8, ...exitTransform }}
//                 transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//                 className={alignmentClass}
//               >
//                 <div className={chatBubbleClass}>
//                   <BubbleEdge isUser={isUser} />
//                   <span>{formatChatResponse(message)}</span>
//                   {!isUser &&
//                     index === messages.length - 1 &&
//                     width < 1024 &&
//                     audioEnabled &&
//                     audio && <ChatAudio />}
//                 </div>
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>

//         <div ref={messagesEndRef} />
//       </div>
//     );
//   }, [audioEnabled, messages, width, category]);

//   return (
//     <Scrollbars
//       hideTracksWhenNotNeeded
//       autoHide
//       renderThumbVertical={() => <div className="bg-secondary rounded" />}
//     >
//       {renderMessage}
//     </Scrollbars>
//   );
// };

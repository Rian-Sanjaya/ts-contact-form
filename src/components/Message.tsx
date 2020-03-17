import React, { ReactNode } from 'react'

type AppProps = {
  header: string;
  text: string;
  children: ReactNode;
}

export const Message = ({ header, text, children }: AppProps) => {
  return (
    <div className="text-center">
      {
        header && 
        <h3 className="message-header">
          {header}
        </h3>
      }

      <div className="message-body">
        {
          text ? text : children
        }
      </div>
    </div>
  )
}

// export const Message: React.FC<{ header: string, text: string }> = ({header, text, children}) => {
//   return (
//     <div className="text-center">
//       {
//         header && 
//         <h3 className="message-header">
//           {header}
//         </h3>
//       }

//       <div className="message-body">
//         {
//           text ? text : children
//         }
//       </div>
//     </div>
//   )
// }
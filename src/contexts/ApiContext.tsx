import React from "react";

type batata = {
   name: string;
}

const batataContext = React.createContext<batata>(null)
const updatebatataContext = React.createContext<React.Dispatch<React.SetStateAction<batata>>>(null)

export function BatataProvider({children}) {
   const [batata, setbatata] = React.useState<batata>(
      { name: "batata" }
   )

   return (
      <batataContext.Provider value={batata}>
      <updatebatataContext.Provider value={setbatata}>
            {children}
      </updatebatataContext.Provider>
      </batataContext.Provider>
   )
}


// Context Hooks
export function usebatataContext() {
   const batata = React.useContext(batataContext)
   return batata
}
export function useUpdatebatataContext() {
   const setbatata = React.useContext(updatebatataContext)
   return setbatata
}

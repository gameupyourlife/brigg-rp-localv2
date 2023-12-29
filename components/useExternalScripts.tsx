import { useEffect } from 'react';

export default function useExternalScripts({ url }:any){
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");

    script.setAttribute("src", url);
    head?.appendChild(script);

    
  }, [url]);
};
import dynamic from 'next/dynamic';
export const Hero = dynamic(() => import('./hero'), { ssr: false })
import React from 'react'
import { Svg } from './styled'
export const Logo = props => (
  <Svg
    width={294.04}
    height={159.23}
    viewBox='102.98 -4.615 294.04 129.23'
    style={{
      background: '0 0'
    }}
    preserveAspectRatio='xMidYMid'
    {...props}
  >
    <defs>
      <filter
        id='prefix__editing-stripe-bk'
        filterUnits='userSpaceOnUse'
        x='-100%'
        y='-100%'
        width='200%'
        height='200%'
      >
        <feFlood floodColor='#700f0f' result='flood1' />
        <feFlood floodColor='#fff' floodOpacity={0.5} result='flood2' />
        <feImage
          xlinkHref='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAwcHgiIGhlaWdodD0iMTAwMHB4Ij48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjQuNCIgaGVpZ2h0PSI0LjQiPjxwYXRoIGQ9Ik0gLTQuNCAtNC40IEwgOC44IDguOCBNIC04LjggLTQuNCBMIDQuNCA4LjggTSAtNC40IC04LjggTCA4LjggNC40IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+'
          width={2000}
          height={1000}
          result='image'
        />
        <feTile in='image' result='tile' />
        <feComposite operator='in' in='flood1' in2='tile' result='tile2' />
        <feGaussianBlur in='SourceAlpha' stdDeviation={10} result='blur' />
        <feComposite operator='in' in='tile2' in2='blur' result='cloud' />
        <feMorphology
          operator='dilate'
          radius={2}
          in='SourceAlpha'
          result='dilate'
        />
        <feComposite operator='in' in='flood2' in2='dilate' result='base' />
        <feMerge>
          <feMergeNode in='cloud' />
          <feMergeNode in='base' />
          <feMergeNode in='SourceGraphic' />
        </feMerge>
      </filter>
    </defs>
    <path
      d='M8.51-5.42q.75.76 1.63 1.14.89.37 1.89.37 3.66 0 6.37-5.26t2.71-13.01q0-3.96-1.33-6.23-1.32-2.27-3.59-2.27-2.65 0-4.66 2.46-2.02 2.45-3.21 7.24-.07.76-.07 1.7v2.84q0 2.33.07 4.85.06 2.52.19 6.17zm.25 4.35q.25 3.65.66 7.12.41 3.46 1.04 7.18-.88.31-2.05.47-1.16.16-2.17.16Q5.17 5.8 4.47-4.03q-.69-9.83-.69-17.89 0-3.72.13-6.68.12-2.96.44-5.86.82-.44 1.79-.66.98-.22 2.05-.22.32 0 .76.06t1.07.19q-.44 1.83-.73 3.53-.28 1.7-.47 3.34 1.7-3.28 4.06-5.04 2.37-1.77 5.2-1.77 3.65 0 5.86 3.4 2.2 3.41 2.2 9.08 0 9.38-4.09 15.65T12.03-.63q-.82 0-1.64-.09-.81-.1-1.63-.35zm27.28-18.65q1.82.63 3.93.98 2.11.34 4.44.34.64 0 1.49-.06t1.22-.19q.51-1.83.73-3.37.22-1.54.22-2.8 0-2.77-.91-3.97-.92-1.2-2.93-1.2-2.65 0-4.85 2.84-2.21 2.83-3.34 7.43zm14.05 9.01q1 .19 2.04.76 1.04.56 1.8 1.32-1.2 3.59-4.88 6.46Q45.36.69 41.39.69q-5.1 0-8.03-3.97-2.93-3.97-2.93-10.64 0-7.5 4.19-13.49 4.19-5.98 9.98-5.98 3.72 0 5.89 2.36 2.18 2.37 2.18 6.4 0 2.14-.41 4.31-.41 2.18-1.1 4.13-1.26.44-3.06.66-1.79.22-4.44.22-2.02 0-4.13-.35-2.11-.34-4.06-1.04-.13.76-.16 1.49-.03.72-.03 1.41 0 4.98 1.73 8.04 1.74 3.05 4.63 3.05 2.52 0 5.04-2.36t3.41-5.64zm22.36-2.33q1.01.12 1.98.41.98.28 1.67.72-.12 5.29-2.11 8.29-1.98 2.99-5.38 2.99-3.97 0-5.99-4.5-2.01-4.51-2.01-13.33 0-2.9.19-5.79.18-2.9.56-5.93-1.2-.06-2.36-.25-1.17-.19-2.36-.44.06-.88.25-1.7t.5-1.51q1.2.25 2.27.44t2.14.25q.25-1.64.66-3.56.41-1.92 1.11-4.76 1.32.07 2.61.29 1.29.22 2.49.6-.63 2.08-1.13 4.03-.51 1.95-.82 3.78 2.52.06 4.91-.03 2.4-.1 4.66-.29 0 .63-.15 1.42-.16.79-.41 1.67-2.34.25-4.76.35-2.43.09-4.82.03-.44 2.96-.69 6.05-.26 3.08-.26 6.04 0 6.68.98 10.18t2.8 3.5q1.71 0 2.56-2.18.85-2.17.91-6.77zm13.92-3.15q0 5.73 1.64 9.01 1.64 3.27 4.35 3.27 2.08 0 3.56-2.11t2.55-6.58q-.13-4.72-.66-8.66-.54-3.94-1.55-7.34-.56-.19-1.22-.29-.67-.09-1.36-.09-3.65 0-5.48 3.18-1.83 3.18-1.83 9.61zm17.01 5.54q0 12.73-3.34 19.47-3.34 6.74-9.19 6.74-4.04 0-6.68-2.71-2.65-2.71-3.34-7.37.94-.69 2.11-1.2 1.16-.5 2.36-.75.63 4.47 2.02 6.49 1.38 2.01 3.84 2.01 3.15 0 5.04-4.44 1.89-4.44 2.27-12.95-1.26 2.59-2.93 3.85-1.67 1.26-3.88 1.26-4.78 0-7.59-4.25-2.8-4.26-2.8-11.5 0-7.69 3.43-12.13 3.44-4.44 9.23-4.44 1.83 0 3.75.44t3.56 1.26q.95 4.1 1.54 9.73.6 5.64.6 10.49zM116.42.13q-.5.19-1.19.31-.7.13-1.39.13-.5.06-.91 0-.41-.07-.79-.19-1.58-8-2.11-16.76-.54-8.76-.1-17.64.45-.19 1.08-.28.63-.1 1.89-.1.63 0 1.22.1.6.09 1.23.28-.38 2.71-.56 4.6-.19 1.89-.26 3.59 1.45-4.91 3.85-7.75 2.39-2.83 4.97-2.83 2.52 0 3.72 1.85 1.2 1.86 1.2 5.71 0 .75-.07 1.63-.06.89-.12 1.89-.76.19-1.8.29-1.04.09-2.23.03.12-.95.19-1.8.06-.85.06-1.67 0-2.01-.51-2.99-.5-.98-1.51-.98-2.14 0-4.28 4.51-2.14 4.5-3.4 11.69.19 3.59.63 7.65.44 4.06 1.19 8.73zm36.92-21.61q0 4.16-1.13 11.02-1.14 6.87-2.71 12.6-.95 0-2.02-.19t-2.08-.5q.07-.25.13-.6t.25-.91q.19-1.01.32-1.48.12-.48.19-.85-1.33.94-3 1.44-1.67.51-3.56.51-4.28 0-6.93-2.3-2.64-2.3-2.64-6.08 0-4.1 3.46-6.24 3.47-2.14 10.21-2.14 1.01 0 1.95.03.95.03 2.52.1.07-.63.07-1.39v-2.39q0-5.04-1.23-7.31-1.23-2.27-4.07-2.27-2.9 0-4.85 2.55-1.95 2.55-2.08 6.46-1.76-.25-2.83-.85t-1.64-1.61q.76-4.16 4.19-7.05 3.43-2.9 7.84-2.9 4.79 0 7.22 3.12 2.42 3.12 2.42 9.23zM135.13-8.69q0 2.33 1.52 3.68 1.51 1.36 3.97 1.36 1.76 0 3.37-.54 1.6-.53 2.99-1.61.5-2.58.79-4.59.28-2.02.41-4.04-6.49-.37-9.77 1.04-3.28 1.42-3.28 4.7zm29.74-1.83q0 3.65.13 6.96.12 3.31.31 4.76-.82.25-1.95.44-1.14.19-2.21.19-.44-7.44-.82-17.71-.37-10.26-.37-17.01.63-.31 1.51-.5t1.83-.19q.94 0 1.48.06.53.07 1.04.19-.07.63-.22 2.49-.16 1.86-.35 4.95 1.95-3.03 4.25-4.54 2.3-1.51 4.95-1.51 2.27 0 3.75 1.07t2.3 3.28q2.2-3.91 4.69-5.86 2.49-1.96 5.38-1.96 3.72 0 5.42 2.84 1.7 2.83 1.7 8.94 0 5.55-1.04 12.54-1.03 7-2.55 12.48-1.13-.07-2.42-.29-1.29-.22-2.18-.53 1.7-6.81 2.56-12.82.85-6.02.85-11.56 0-3.97-.92-5.71-.91-1.73-2.99-1.73t-4.09 2.08q-2.02 2.08-3.53 5.8.06 1.07.09 1.79.03.73.03 1.36 0 4.47-.75 10.14-.76 5.67-1.7 9.39-.95-.07-2.18-.29-1.23-.22-2.23-.53 1.19-6.37 1.67-10.71.47-4.35.47-8.07 0-4.03-.92-5.76-.91-1.73-2.99-1.73-2.2 0-4.31 1.95-2.11 1.95-3.5 5.35-.06 2.52-.13 5.14-.06 2.61-.06 4.82z'
      fill='#de530f'
      transform='translate(149.265 103.104)'
      filter='url(#prefix__editing-stripe-bk)'
    />
    <style />
  </Svg>
)

import React from 'react';

// import { Container } from './styles';

// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from '@nivo/line'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const oi = [
  {
    "id": "japan",
    "color": "hsl(167, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 27
      },
      {
        "x": "helicopter",
        "y": 235
      },
      {
        "x": "boat",
        "y": 213
      },
      {
        "x": "train",
        "y": 179
      },
      {
        "x": "subway",
        "y": 175
      },
      {
        "x": "bus",
        "y": 108
      },
      {
        "x": "car",
        "y": 41
      },
      {
        "x": "moto",
        "y": 290
      },
      {
        "x": "bicycle",
        "y": 249
      },
      {
        "x": "horse",
        "y": 258
      },
      {
        "x": "skateboard",
        "y": 9
      },
      {
        "x": "others",
        "y": 111
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(125, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 204
      },
      {
        "x": "helicopter",
        "y": 160
      },
      {
        "x": "boat",
        "y": 179
      },
      {
        "x": "train",
        "y": 11
      },
      {
        "x": "subway",
        "y": 53
      },
      {
        "x": "bus",
        "y": 9
      },
      {
        "x": "car",
        "y": 110
      },
      {
        "x": "moto",
        "y": 190
      },
      {
        "x": "bicycle",
        "y": 206
      },
      {
        "x": "horse",
        "y": 173
      },
      {
        "x": "skateboard",
        "y": 74
      },
      {
        "x": "others",
        "y": 188
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(93, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 166
      },
      {
        "x": "helicopter",
        "y": 278
      },
      {
        "x": "boat",
        "y": 37
      },
      {
        "x": "train",
        "y": 20
      },
      {
        "x": "subway",
        "y": 96
      },
      {
        "x": "bus",
        "y": 121
      },
      {
        "x": "car",
        "y": 170
      },
      {
        "x": "moto",
        "y": 242
      },
      {
        "x": "bicycle",
        "y": 217
      },
      {
        "x": "horse",
        "y": 189
      },
      {
        "x": "skateboard",
        "y": 172
      },
      {
        "x": "others",
        "y": 89
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(144, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 146
      },
      {
        "x": "helicopter",
        "y": 128
      },
      {
        "x": "boat",
        "y": 299
      },
      {
        "x": "train",
        "y": 79
      },
      {
        "x": "subway",
        "y": 132
      },
      {
        "x": "bus",
        "y": 163
      },
      {
        "x": "car",
        "y": 192
      },
      {
        "x": "moto",
        "y": 236
      },
      {
        "x": "bicycle",
        "y": 291
      },
      {
        "x": "horse",
        "y": 278
      },
      {
        "x": "skateboard",
        "y": 51
      },
      {
        "x": "others",
        "y": 76
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(245, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 195
      },
      {
        "x": "helicopter",
        "y": 56
      },
      {
        "x": "boat",
        "y": 269
      },
      {
        "x": "train",
        "y": 243
      },
      {
        "x": "subway",
        "y": 221
      },
      {
        "x": "bus",
        "y": 32
      },
      {
        "x": "car",
        "y": 161
      },
      {
        "x": "moto",
        "y": 298
      },
      {
        "x": "bicycle",
        "y": 144
      },
      {
        "x": "horse",
        "y": 105
      },
      {
        "x": "skateboard",
        "y": 196
      },
      {
        "x": "others",
        "y": 202
      }
    ]
  }
]
export const ChartTest = ({ data = oi }) => (
  <div className="p-6 
  bg-white
  rounded-lg shadow-md col-span-2">
  <div className="flex items-center justify-between">
    <h2 className="text-white font-semibold text-lg">Sales Performance</h2>
    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  </div>
  <div className="mt-6">
    <div className='h-[20rem]'>
      <ResponsiveLine
          data={data}
          enableGridX={false}
          enableArea={true}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto',
              stacked: true,
              reverse: false
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
              // orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'transportation',
              legendOffset: 36,
              legendPosition: 'middle'
          }}
          axisLeft={{
              // orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'count',
              legendOffset: -40,
              legendPosition: 'middle'
          }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
              {
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: 'left-to-right',
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: 'circle',
                  symbolBorderColor: 'rgba(0, 0, 0, .5)',
                  effects: [
                      {
                          on: 'hover',
                          style: {
                              itemBackground: 'rgba(0, 0, 0, .03)',
                              itemOpacity: 1
                          }
                      }
                  ]
              }
          ]}
      />
    </div>
  </div>
</div>

)

















// const pudim = [
//   {
//     "id": "c",
//     "label": "c",
//     "value": 304,
//     "color": "hsl(316, 70%, 50%)"
//   },
//   {
//     "id": "haskell",
//     "label": "haskell",
//     "value": 285,
//     "color": "hsl(49, 70%, 50%)"
//   },
//   {
//     "id": "erlang",
//     "label": "erlang",
//     "value": 247,
//     "color": "hsl(147, 70%, 50%)"
//   },
//   {
//     "id": "css",
//     "label": "css",
//     "value": 194,
//     "color": "hsl(126, 70%, 50%)"
//   },
//   {
//     "id": "rust",
//     "label": "rust",
//     "value": 297,
//     "color": "hsl(222, 70%, 50%)"
//   }
// ]










// // install (please make sure versions match peerDependencies)
// // yarn add @nivo/core @nivo/pie
// import { ResponsivePie } from '@nivo/pie'

// // make sure parent container have a defined height when using
// // responsive component, otherwise height will be 0 and
// // no chart will be rendered.
// // website examples showcase many properties,
// // you'll often use just a few of them.
// export const ChartTest = ({ data = pudim }) => (
//   <div className="h-[20rem]" >
//     <ResponsivePie
//         data={data}
//         margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
//         startAngle={164}
//         innerRadius={0.5}
//         padAngle={0.7}
//         cornerRadius={3}
//         activeOuterRadiusOffset={8}
//         borderWidth={1}
//         borderColor={{
//             from: 'color',
//             modifiers: [
//                 [
//                     'darker',
//                     0.2
//                 ]
//             ]
//         }}
//         arcLinkLabelsSkipAngle={10}
//         arcLinkLabelsTextColor="#333333"
//         arcLinkLabelsThickness={2}
//         arcLinkLabelsColor={{ from: 'color' }}
//         arcLabelsSkipAngle={10}
//         arcLabelsTextColor={{
//             from: 'color',
//             modifiers: [
//                 [
//                     'darker',
//                     2
//                 ]
//             ]
//         }}
//         defs={[
//             {
//                 id: 'dots',
//                 type: 'patternDots',
//                 background: 'inherit',
//                 color: 'rgba(255, 255, 255, 0.3)',
//                 size: 4,
//                 padding: 1,
//                 stagger: true
//             },
//             {
//                 id: 'lines',
//                 type: 'patternLines',
//                 background: 'inherit',
//                 color: 'rgba(255, 255, 255, 0.3)',
//                 rotation: -45,
//                 lineWidth: 6,
//                 spacing: 10
//             }
//         ]}
//         fill={[
//             {
//                 match: {
//                     id: 'ruby'
//                 },
//                 id: 'dots'
//             },
//             {
//                 match: {
//                     id: 'c'
//                 },
//                 id: 'dots'
//             },
//             {
//                 match: {
//                     id: 'go'
//                 },
//                 id: 'dots'
//             },
//             {
//                 match: {
//                     id: 'python'
//                 },
//                 id: 'dots'
//             },
//             {
//                 match: {
//                     id: 'scala'
//                 },
//                 id: 'lines'
//             },
//             {
//                 match: {
//                     id: 'lisp'
//                 },
//                 id: 'lines'
//             },
//             {
//                 match: {
//                     id: 'elixir'
//                 },
//                 id: 'lines'
//             },
//             {
//                 match: {
//                     id: 'javascript'
//                 },
//                 id: 'lines'
//             }
//         ]}
//         legends={[
//             {
//                 anchor: 'bottom',
//                 direction: 'row',
//                 justify: false,
//                 translateX: 0,
//                 translateY: 56,
//                 itemsSpacing: 0,
//                 itemWidth: 100,
//                 itemHeight: 18,
//                 itemTextColor: '#999',
//                 itemDirection: 'left-to-right',
//                 itemOpacity: 1,
//                 symbolSize: 18,
//                 symbolShape: 'circle',
//                 effects: [
//                     {
//                         on: 'hover',
//                         style: {
//                             itemTextColor: '#000'
//                         }
//                     }
//                 ]
//             }
//         ]}
//     />
//   </div>
// )
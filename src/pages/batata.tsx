import React from 'react';
const mockData = [
    {
      id: "totalActive",
      label: "Total Active Clients",
      value: 350,
      color: "hsl(214, 100%, 57%)"
    },
    {
      id: "aboutToExpire",
      label: "Clients About to Expire",
      value: 50,
      color: "hsl(41, 100%, 50%)"
    },
    {
      id: "farFromExpiring",
      label: "Clients Far From Expiring",
      value: 300,
      color: "hsl(182, 84%, 51%)"
    },
    {
      id: "expired",
      label: "Expired Clients",
      value: 75,
      color: "hsl(349, 100%, 50%)"
    },
    {
      id: "renewed",
      label: "Clients Renewed",
      value: 100,
      color: "hsl(98, 60%, 52%)"
    }
  ];
  
const App = () => {
  const data = mockData;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white shadow-md p-6 rounded-lg">
        <div className="text-2xl font-bold mb-4 text-purple-600">
          Subscriptions Overview
        </div>
        <div className="h-96">
          <MyResponsivePie data={data} />
        </div>
      </div>
    </div>
  );
};

export default App;


// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { ResponsivePie } from '@nivo/pie'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsivePie = ({ data /* see data tab */ }) => (
    <ResponsivePie
        data={data}
        colors={{ datum: 'data.color' }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={3}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    Number('0.7')
                ]
            ]
        }}
        arcLinkLabelsTextOffset={9}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsOffset={3}
        arcLinkLabelsDiagonalLength={19}
        arcLinkLabelsStraightLength={27}
        arcLinkLabelsThickness={4}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    Number('2')
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        // legends={[
        //     {
        //         anchor: 'bottom',
        //         direction: 'row',
        //         justify: false,
        //         translateX: 0,
        //         translateY: 56,
        //         itemsSpacing: 0,
        //         itemWidth: 100,
        //         itemHeight: 18,
        //         itemTextColor: '#999',
        //         itemDirection: 'left-to-right',
        //         itemOpacity: 1,
        //         symbolSize: 18,
        //         symbolShape: 'circle',
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemTextColor: '#000'
        //                 }
        //             }
        //         ]
        //     }
        // ]}
    />
)
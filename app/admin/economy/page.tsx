"use client"

import { getTransactionData, writeDummyData } from "@/utils/admin/economy/transactionDataRet";
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

export default function Page(){
    // await writeDummyData();
    // const data = await getTransactionData();

    const options = {
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
            text: 'Gradient Stacked Area Chart'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        // legend: {
        //     data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
        // },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],

        
        
        dimensions: ['product', '2015', '2016', '2017'],
        source: [
            { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
            { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
            { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
            { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
        ],
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
    };

    // register theme object
    echarts.registerTheme('brigg-rp-chart-theme', {
        backgroundColor: '#141419',
        legend: {
            textStyle: {
                color: '#e6e6e6'
            }
        },
        textStyle: {
            color: '#e6e6e6'
        },
        title: {
            textStyle: {
                color: '#e6e6e6'
            },
            subtextStyle: {
                color: '#b2b2b2'
            }
        },
        tooltip: {
            backgroundColor: '#141419',
            borderColor: '#262631',
            textStyle: {
                color: '#e6e6e6'
            },
        },
        // legend: {
        //     itemSytyle: {
        //         color: '#63f961',
        //     },
        // }


    });

    return(
        <div>
            Page
            <div className='w-screen max-w-6xl p-10 aspect-video h-screen max-h-[650px]'>
                <ReactECharts option={options} theme={"brigg-rp-chart-theme"}  style={{ height: '400px', width: '1152px' }} />
            </div>
        </div>
    )
}
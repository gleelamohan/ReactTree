import React, { Component } from 'react';
import { Page, Section } from 'react-page-layout';
import Tree from 'react-d3-tree';

import './styles.scss';

class HomePage extends Component {


    constructor(props) {
        super(props);

        this.state = {
            Click: null
        };
    }

     bindState(obj){

        if (!obj.children) {
            this.setState({
                Click: obj.name,
                URL: obj.url,
                Image: obj.image,
                Desc: obj.description,
                Owner: obj.owner
            })
        }
    }

    getImageURL(name) {

         switch(name) {
             case 'EWS 360': return require('../../images/ews360.png');break;
             case 'EWS Timeline': return require('../../images/ewstimeline.png'); break;
             case 'EWS 6.0': return require('../../images/ews6.png'); break;
             case 'Journeys': return require('../../images/journey.png'); break;
             case 'Accounts': return require('../../images/accounts.png'); break;
             case 'Engagements': return require('../../images/engagements.png'); break;
             case 'CIC PComm': return require('../../images/pcomm.png'); break;
             case 'CIC Dashboard': return require('../../images/cic.png'); break;
             case 'ADR Source of Truth': return require('../../images/adr.png'); break;
             case 'ECOMM Dashboard': return require('../../images/ecomm.png'); break;
             case 'TSD 2.0': return require('../../images/tsd.png'); break;
         }
    }

    LoadModal(){
        const imgUrl = this.getImageURL(this.state.Click);
        debugger
         if(!this.state.Click){
             return null;
         }
         return (
             <article className="slds-card" style={{marginTop: '50px'}}>
                 <div className="slds-card__header slds-grid">
                     <header className="slds-media slds-media_center slds-has-flexi-truncate" >

                         <div className="slds-media__body" style={{borderBottom:"1px solid #dddbda"}}>
                             <h2>
                                 <a href={this.state.URL} className="slds-card__header-link slds-truncate" title="[object Object]" target="_blank">
                                     <span className="slds-text-heading_small" style={{color:'#358774', fontSize:'13px'}}>{ this.state.Click}</span>
                                 </a>
                             </h2>
                         </div>
                     </header>
                 </div>
                 <div className="slds-card__body slds-card__body_inner">
                     <a href={this.state.URL} target="_blank"> <img src={imgUrl}  /> </a>
                         <p className="ng-binding paddingTop"><b>Description: </b>{this.state.Desc} </p>
                         <p className="ng-binding paddingTop"><b>Owner: </b>{this.state.Owner}</p>
                         <p className="ng-binding paddingTop"><b>Refresh Frequency: </b>Monthly</p>
                         <p className="ng-binding paddingTop"><b>Data as of: </b>N/A</p>
                 </div>
             </article>
         )
    }

    render() {



        const
            myTreeData = [
                {
                    name: 'Customer Intelligence',

                    children: [
                        {
                            name: 'EWS',
                            children: [
                                {
                                    name : 'EWS 6.0',
                                    url: 'https://org62.my.salesforce.com/analytics/wave/wave.apexp?tsid=02u300000014lDD#dashboard/0FK30000000TNoQGAW',
                                    description: 'N/A',
                                    owner: 'N/A'
                                },
                                {
                                    name : 'EWS 360',
                                    url: 'https://org62.my.salesforce.com/analytics/wave/wave.apexp?tsid=02u300000014lDD#dashboard/0FK0M000000094WWAQ',
                                    image: '../../images/ci-logo.png',
                                    description: 'Trusted and a data-driven intelligent solution ' +
                                    'that enables CSG to proactively engage with customers using enhanced prediction scores for attrition, ' +
                                    'added dimensions of data to better incorporate customer interactions, better explanation of score,' +
                                    ' and faster ability to incorporate clouds.',
                                    owner: 'Krishna Kumarswamy (kkumaraswamy@salesforce.com)'
                                },
                                {
                                    name : 'EWS Timeline',
                                    url: 'http://ews-next.herokuapp.com/#/narrative',
                                    description: 'The Application Development in Progress.',
                                    owner: 'Dennis Philip (dphilip@salesforce.com)'
                                }
                            ]

                        },
                        {
                            name: 'Journeys',
                            url: 'https://org62.my.salesforce.com/analytics/wave/wave.apexp?tsid=02u300000014lDD#dashboard/0FK0M00000007VVWAY',
                            image: '../../images/journey.png',
                            children: [
                                {
                                    name : 'Accounts',
                                    url:'https://org62.my.salesforce.com/analytics/wave/wave.apexp?tsid=02u300000014lDD#dashboard/0FK0M00000007l9WAA',
                                    description: 'N/A',
                                    owner: 'N/A'

                                },
                                {
                                    name : 'Engagements',
                                    url: 'https://org62.my.salesforce.com/analytics/wave/wave.apexp?tsid=02u300000014lDD#dashboard/0FK0M00000007JyWAI',
                                    description: 'N/A',
                                    owner: 'N/A'
                                }
                            ]
                        },
                        {
                            name: 'Support Analytics',
                            children: [
                                {
                                    name : 'CIC PComm',
                                    url: 'https://org62.my.salesforce.com/analytics/wave/wave.apexp?tsid=02u300000014lDD#dashboard/0FK0M000000GrmMWAS',
                                    description: 'Used to prepare the quarterly PComm report for Maria,' +
                                    ' this dashboard showcases the trends in multi-customer critical incidents for Core cloud, ' +
                                    'and provides details on the top root cause categories and impact on sub-clouds',
                                    owner: 'Ramya Rangarajan (rrangarajan@salesforce.com)',
                                    frequency: 'Monthly'
                                },
                                {
                                    name : 'CIC Dashboard',
                                    url: 'https://org62.my.salesforce.com/analytics/wave/wave.apexp?tsid=02u300000014lDD#dashboard/0FK0M000000L0a9WAC',
                                    description: 'One stop shop for critical incidents such as high-severity Single Customer incidents [from Org62] ' +
                                    'and Multi-Customer incidents [from GUS] that helps the CIC team to perform further analysis and in taking operational decisions',
                                    owner: 'Ramya Rangarajan (rrangarajan@salesforce.com)',
                                    frequency: 'Daily'
                                },
                                {
                                    name : 'TSD 2.0',
                                    url:'https://org62.my.salesforce.com/analytics/wave/wave.apexp?tsid=02u300000014lDD#dashboard/0FK0M000000GqXXWA0',
                                    description: 'Projects the performance of the Technical Support team by means of KPI\'s related to Case Volume, Backlog, Management Escalations, CSAT and Case Awareness',
                                    owner: 'Ramya Rangarajan (rrangarajan@salesforce.com)',
                                    frequency: 'Daily'
                                }
                                ]
                        },
                        {
                            name: 'Accelarator',
                            children: [
                                {
                                    name : 'ADR Source of Truth',
                                    url: 'https://org62.my.salesforce.com/analytics/wave/wave.apexp?tsid=02u300000014lDD#dashboard/0FK0M0000004K16WAE',
                                    description: 'This dashboard helps with business intelligence for Specialist utilization, margin proximity, workflow management, and productivity.',
                                    owner: 'Ridhima Gupta (ridhima.gupta@salesforce.com)',
                                    frequency: 'Twice Daily'
                                }
                                ]
                        },
                        {
                            name: 'Cust_Intell_DEA',
                            children: [
                                {
                                    name : 'ECOMM Dashboard',
                                    url: 'https://org62.my.salesforce.com/analytics/wave/wave.apexp?tsid=02u300000014lDD#dashboard/0FK0M000000Cf6AWAS',
                                    description: 'This dashboard is the single source of truth for Red Accounts. It projects KPI\'s such as # New Reds, # Reds Closed, AOV at Risk and AOV Saved, slicing and dicing the data across dimensions like Product, Key Risk Category, Region and Timeframe',
                                    owner: 'Ramya Rangarajan (rrangarajan@salesforce.com)',
                                    frequency: 'Twice Daily'
                                }
                            ]
                        }
                    ],
                },
            ];

        const style = {
            links: {
                fill: 'none',
                stroke: '#ddd',
                strokeWidth: 1
            },
            nodes: {
                node: {
                    circle: {
                        stroke: 'rgb(0, 161, 224)',
                        strokeWidth: 1,
                        fill: 'rgb(0, 161, 224)',
                        r: 5
                    }
                },
                leafNode: {
                    circle: {
                        stroke: 'rgb(0, 161, 224)',
                        strokeWidth: 1,
                        fill: 'rgb(0, 161, 224)',
                        r: 5
                    }
                }
            }
        }

        const separate = {
            siblings: 1, nonSiblings: 1
        }



        return (
            <Page layout="public">
                <Section slot="main">

                    <div className="flex-container">
                    <div className="column">
                    <div id="treeWrapper" style={{width: '50em', height: '100em'}}>
                        <Tree data={myTreeData} zoomable={true} initialDepth = {1} nodeSize ={ {x:150,y:50}}
                              translate={{x:100, y:250}} styles = { style } separation = { separate}  onClick={(obj) => {this.bindState(obj)}}/>
                    </div>
                    </div>

                        <div className="column bg-alt">

                            {this.LoadModal()}
                        </div>
                    </div>
                </Section>
            </Page>
        );
    }
}

export default HomePage;

import React, { Component } from 'react';
import { Page, Section } from 'react-page-layout';

import './styles.scss';


class AboutCI extends Component {



    render() {


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

                    </div>





                </Section>
            </Page>
        );
    }
}

export default AboutCI;

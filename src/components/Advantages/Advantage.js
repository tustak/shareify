import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    * > ul {
        list-style: none;
        padding: 0;
    }
`;

export const Advantage = (props) => (
    <Wrapper className="col-xl-3 order-xl-3 col-lg-3 order-lg-3 col-md-3 col-sm-12 col-xs-12">

        <div className="ui-block">
            <div className="ui-block-title">
                <h5 className="title bold">{props.title}</h5>
            </div>
            <ul className="widget advantages">
                <li>
                    <article className="hentry post">

                        <a href="" className="h3">{props.advantageBrief}</a>

                        <p>{props.advantageDescription}</p>

                    </article>
                </li>
            </ul>
        </div>
    </Wrapper>
)
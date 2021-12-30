import React from "react";
import styled from "styled-components";
import { Box } from "atoms";

const Pricing = styled.div`
width: 50%;
height: auto;
font-size: 2rem;
padding-left: 9rem;
padding-top: 2rem;
min-height: 400px;
margin: 3.5rem auto 1.5 rem;
`

export const Tab3 = () => {
    return (
        <Pricing>
            <div>
                <p> E-Bookeeping has been around since 2002 and it employs 36 people.E-Bookeeping indicates that the program can be used by everyone,whether or not you have experience in the feild of Bookeeping.
                </p>
                <p>
                    Whether you are the owner of a BV or a starting freelancer,proper bookeeping is essential. E-bookeeping is an accounting program that should make accounting easy for any small business-owner, whether you are a novice or an experienced entrepreneur.
                </p>
            </div>
        </Pricing>
    );

};
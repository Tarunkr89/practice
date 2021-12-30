import React from "react";
import styled from "styled-components";
import { Box } from "atoms";

const Features = styled.div`
width: 50%;
height: auto;
font-size: 2rem;
padding-left: 9rem;
min-height: 400px;
margin: 3.5rem auto 1.5 rem;
`

export const Tab2 = () => {
    return (<Features>
        <div>
            <h4>Product Overview</h4>
            <div>
                <Box border="1px solid#ddd" p="1rem" ><h4>In our opinion,E-booking is especially suitable for smaller companies that are looking for a fully
                    online accounting program.</h4></Box>

            </div>
            <div>
                <p>
                    Whether you are the owner of a BV or a starting freelancer,proper bookeeping is essential.
                    E-bookeeping is an accounting program that should make accounting easy for any small business-owner,
                    whether you are a novice or an experienced entrepreneur.
                </p>
            </div>
        </div>
    </Features>


    );

};
import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { kebabCase } from 'lodash'

import * as colors from '../../constants/styles/colors'

interface IProps {
    tags: string[]
}

const App = ({ tags }: IProps) => (
    <React.Fragment>
        {tags && tags.length ? (
            <List>
                {tags.map(tag => (
                    <Item key={tag + `tag`}>
                        <StyledLink to={`/tags/${kebabCase(tag)}/`}>
                            {tag}
                        </StyledLink>
                    </Item>
                ))}
            </List>
        ) : null}
    </React.Fragment>
)

const List = styled.ul`
    align-self: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
`

const Item = styled.li``

const StyledLink = styled(Link)`
    color: ${colors.PRIMARY};
    &:hover {
        color: ${colors.PRIMARY_INVERT};
    }
`

export default App

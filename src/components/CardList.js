import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => 
{
    return (
        <div>
            { 
            robots.map(( user, ind) => {
                return (
                    <Card 
                    key = {ind} 
                    id={ robots[ind].id } 
                    name={ robots[ind].name } 
                    email={ robots[ind].email }
                    />
                );
                })
            }
        </div>
    );
}

export default CardList;
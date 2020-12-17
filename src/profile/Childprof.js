import React from 'react';
import PropTypes from 'prop-types';

function Childprof  ({fullname,bio,profession,HandlName,children}) {
    

    return (
        <div >
            {HandlName(fullname)}
        
        <h1> My name is : {fullname} </h1>
        <h1>bio : {bio}</h1>
        <h1>profession : {profession}</h1>
        {children}
        </div>
    );
};
Childprof.defaultProps = {
    fullname :'this is the defaukt value',
};
Childprof.propTypes ={
    fullname : PropTypes.string,
    bio : PropTypes.string,
    profession : PropTypes.string,
};

export default Childprof;
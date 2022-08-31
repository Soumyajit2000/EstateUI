import React, { useState, useEffect } from 'react'
import { createAPIEndpoint2, ENDPIONTS2 } from "../api/index2";
import { List, ListItem, ListItemText, Paper, InputBase, IconButton, makeStyles, ListItemSecondaryAction } from '@material-ui/core';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
//import "./AdminModal.css";
import "./ForHomme.css";

const useStyles = makeStyles(theme => ({
    
    searchPaper: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '400px',
        marginBottom: '40px'
    },
    searchInput: {
        marginLeft: theme.spacing(1.5),
        flex: 1,
    }
}))

function ForHomme() {
    const [show3, setShow3] = useState(false);
    
    const [propertyList2, setPropertyList2] = useState([])
    
    const classes = useStyles();

    
    useEffect(() => {
        createAPIEndpoint2(ENDPIONTS2.ADDPROPERTY).fetchAll()
            .then(res => {setPropertyList2(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(propertyList2);

  // exclude column list from filter
  const excludeColumns = ["id", "color"];

  // handle change event of search input
  const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(propertyList2);
    else {
      const filteredData = propertyList2.filter(item => {
        return Object.keys(item).some(key =>
          excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  }

    return (
        <>
            <Paper className={classes.searchPaper}>
                <InputBase
                    className={classes.searchInput}
                    value={searchText}
                    placeholder="Search properties"
                    onChange={e => handleChange(e.target.value)}
                     />
                <IconButton>
                    <SearchTwoToneIcon />
                </IconButton>
            </Paper>
                <table className="table1">
                <thead>
                    <tr>
                        <th className="tsmall">SERIAL NO</th>
                        <th className="tbig">PROPERTY TYPE</th>
                        <th className="tsmall">BUDGET</th>
                        <th className="tbig">LOCATION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => (
                            <tr key={item.propertyId}>
                                <td
                                    Value={item.propertyId}>
                                    {item.propertyId}
                                </td>
                                <td
                                    Value={item.propertyType}>
                                    {item.propertyType}
                                </td>
                                <td 
                                    Value={item.budget}>
                                    {item.budget}
                                </td>
                                 <td
                                    Value={item.locality}>
                                    {item.locality}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                
            </table>

        </>
    )
}




export default ForHomme;
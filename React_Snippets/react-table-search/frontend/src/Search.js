import * as React from 'react';
import Title from './Title';
import { Box, TextField, TableRow, TableCell, Table, TableBody } from '@mui/material';

function createData(lang_id, language) {
    return { lang_id, language };
}

const tableData = [
    {
        lang_id: "1",
        language: "JAVA"
    }
    ,
    {
        lang_id: "2",
        language: "PYTHON"
    }
    ,
    {
        lang_id: "3",
        language: "REACT JS"
    }
    ,
    {
        lang_id: "4",
        language: "ANGULAR JS"
    }
    ,
    {
        lang_id: "5",
        language: "PHP"
    },
    {
        lang_id: "6",
        language: "VUE JS"
    }
    ,
    {
        lang_id: "7",
        language: "KOTLIN"
    }
    ,
    {
        lang_id: "8",
        language: "C#"
    }
]

const Languages = () => {
    const [search, setSearch] = React.useState('');

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        height: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 3
    };

    const rows = [];

    tableData.filter((language) =>
        language.language?.includes(search)
    ).map((result) => {
        rows.push(createData(result.lang_id, result.language))
    })

    return (
        <React.Fragment>
            <Box sx={style}>
                <Title>Languages</Title>
                <TextField fullWidth id='langSearch' label='Search' variant='standard' value={search} onChange={(e) => setSearch(e.target.value.toLocaleUpperCase())} />
                <Box >
                    <Table size="small">
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell sx={{ width: "100%", fontSize: 16 }}>{(row.language)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </Box>
        </React.Fragment>
    );
}

export default Languages;
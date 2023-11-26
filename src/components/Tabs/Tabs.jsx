import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Tabs.scss';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }} className="tabs__container">
            <Box sx={{ borderBottom: 1}} className="Box">
                <Tabs value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                      >
                    <Tab className="tabs__tab" label="МИССИЯ" {...a11yProps(0)}></Tab>
                    <Tab className="tabs__tab" label="ЦЕЛИ" {...a11yProps(1)} />
                    <Tab className="tabs__tab" label="ПРИОРИТЕТЫ" {...a11yProps(2)} />
                    <Tab className="tabs__tab" label="ЗАДАЧИ" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <CustomTabPanel  value={value} index={0}>
                <div className="tabs__content"> Миссия нашей строительной компании заключается в создании качественных, инновационных и устойчивых строительных решений, которые удовлетворяют потребности наших клиентов, способствуют развитию сообщества и уважают окружающую среду</div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <div className="tabs__content"> Наша цель - быть ведущей компанией, предоставляющей высококачественные строительные услуги, основанные на индивидуальном подходе к каждому проекту и стремлении к постоянному совершенствованию.</div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <div className="tabs__content">
                    <p>Качество и безопасность</p>
                    <p>Устойчивость и экологичность</p>
                    <p>Удовлетворение клиентов</p>
                    <p>Инновации и развитие</p>
                    <p>Профессионализм и обучение</p>
                    <p>Финансовая устойчивость</p>
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <div className="tabs__content">
                    <p>Завершение проектов в срок и в бюджете</p>
                    <p>Обеспечение безопасности</p>
                    <p>Контроль качества</p>
                    <p>Управление ресурсами</p>
                </div>
            </CustomTabPanel>
        </Box>
    );
}

export {BasicTabs}
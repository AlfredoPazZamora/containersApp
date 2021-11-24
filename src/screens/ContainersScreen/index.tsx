import React, { useEffect, useState } from 'react'
import { ScrollView, StatusBar } from 'react-native';
import containersApi from '../../api/containersApi';
import ContainerCard from '../../components/ContainerCard';
import { ContainersInterface } from '../../interfaces/interfaces';
import { NativeStackScreenProps } from '@react-navigation/native-stack'

interface Props extends NativeStackScreenProps<any, any>{}

const Component = (props: Props) => {
    const {navigation} = props;
    const [containers, setContainers] = useState<[ContainersInterface] | null>(null,);

    const getContainers = async () => {
        const { data } = await containersApi.get<[ContainersInterface]>('/containers',)

        setContainers(data);
    };

    useEffect(() => {
        getContainers();
    }, []);

    const onSelectContainer = (container: ContainersInterface) => {
        navigation.navigate('Details', container);
    }

    const renderContainer = containers?.map((container, index) => {
        return <ContainerCard key={`container-${index}`} container={container} onClick={onSelectContainer}/>
    });

    return (
        //Container
        <ScrollView style={{backgroundColor: '#f2f2f2'}}> 
            <StatusBar backgroundColor='#f2f2f2' barStyle="dark-content"/>
            {renderContainer}
        </ScrollView>
        
    )
}

export default Component;

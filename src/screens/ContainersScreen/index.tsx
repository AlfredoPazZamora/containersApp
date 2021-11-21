import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native';
import containersApi from '../../api/containersApi';
import ContainerCard from '../../components/ContainerCard';
import { ContainersInterface } from '../../interfaces/LoginInterfaces';

const Component = () => {
    const [containers, setContainers] = useState<[ContainersInterface] | null>(null,);

    const getContainers = async () => {
        const { data } = await containersApi.get<[ContainersInterface]>('/containers',)

        setContainers(data);
    };

    useEffect(() => {
        getContainers();
    }, []);

    const renderContainer = containers?.map((container, index) => {
        return <ContainerCard key={`container-${index}`} container={container} />
    });

    return <ScrollView>{renderContainer}</ScrollView>
}

export default Component;

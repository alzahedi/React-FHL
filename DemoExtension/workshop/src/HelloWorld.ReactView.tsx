import * as Az from "@microsoft/azureportal-reactview/Az";
import * as React from "react";
// import { HelloWorldStrings } from "./HelloWorldStrings.resjson";

import { ConfidenceRating, UserInfo } from "./ConfidenceRating";
import { Text } from "@fluentui/react";
// import { Text } from "@fluentui/react";



//V1 - Hello World Boiler plate discusssion.

/*
Az.setTitle(HelloWorldStrings.HelloWorldTitle);

const HelloWorld = () => {
    return <Text>{HelloWorldStrings.HelloWorldMessage}</Text>;
};

export default HelloWorld;
*/


/*

V2 - Fetching Data via API calls, show how you can modify text

import * as Az from "@microsoft/azureportal-reactview/Az";
import { useState, useEffect } from "react";
import { HelloWorldStrings } from "./HelloWorldStrings.resjson";
import { ArmResource } from "@microsoft/azureportal-reactview/ResourceManagement";
import { batch } from "@microsoft/azureportal-reactview/Ajax";
import { Text, Stack, StackItem } from "@fluentui/react"; // Import Stack components
import * as React from "react";

// Set the page title in Azure
Az.setTitle(HelloWorldStrings.HelloWorldTitle);

// Function to fetch all resources
const getAllResources = () => {
    return batch<{ value: ArmResource[] }>({
        uri: "/subscriptions/a5082b19-8a6e-4bc5-8fdd-8ef39dfebc39/resources?api-version=2019-10-01",
        type: "GET",
        setTelemetryHeader: "GettingStarted.ReactView/AllResources",
    }).then((armResponse) => {
        return armResponse.content.value;
    });
};

// Main HelloWorld component
const HelloWorld = () => {
    // State to hold the resources and the loading/error states
    const [resources, setResources] = useState<ArmResource[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch resources on component mount
    useEffect(() => {
        getAllResources()
            .then((data) => {
                setResources(data.slice(0, 10));  // Limit to the first 10 resources
                setLoading(false);                // Stop the loading state
            })
            .catch((_err) => {
                console.log(_err);
                setError("Failed to fetch resources.");  // Handle errors
                setLoading(false);                       // Stop the loading state
            });
    }, []);

    // Styling for resource name and location
    const textStyles = {
        fontSize: "20px",  // Larger font size for both name and location
        marginBottom: "8px" // Add margin between items
    };

    const stackStyles = {
        root: {
            marginTop: "16px" // Add space at the top of the list
        }
    };

    // Render the component
    return (
        <>
            {*//* Render the title *//*}
            <Text>{HelloWorldStrings.HelloWorldMessage}</Text>

            {*//* Conditionally render based on loading, error, or data *//*}
            {loading ? (
                <Text>Loading resources...</Text>  // Show loading message
            ) : error ? (
                <Text>{error}</Text>  // Show error message
            ) : resources && resources.length > 0 ? (
                <Stack style={stackStyles}>
                    {*//* Show the list of resources (up to 10) *//*}
                    {resources.map((resource) => (
                        <Stack key={resource.id}>
                            <StackItem style={textStyles}>
                                <Text variant="large">Name: {resource.name}</Text> {*//* Resource name *//*}
                            </StackItem>
                            <StackItem style={textStyles}>
                                <Text variant="large">Location: {resource.location || "No Region"}</Text> {*//* Resource location *//*}
                            </StackItem>
                        </Stack>
                    ))}
                </Stack>
            ) : (
                <Text>No resources found.</Text>  // Handle no resources case
            )}
        </>
    );
};

export default HelloWorld;
*/


Az.setTitle("Confidence ratings");

const HelloWorld = () => {
    return <>
        <Text>Hello World!</Text>
        <UserInfo />
        <ConfidenceRating confidenceRating={99} />
    </>
    
};

export default HelloWorld;


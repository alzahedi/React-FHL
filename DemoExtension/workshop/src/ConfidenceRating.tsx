import * as React from "react";
import { Icon, mergeStyles } from "@fluentui/react";
import * as Az from "@microsoft/azureportal-reactview/Az";
import { DialogType, showDialog } from "@microsoft/azureportal-reactview/Dialog";

const iconClass = mergeStyles({
   fontSize: "100px",
   color: "#428000",
  });

export const ConfidenceRating = (props: { confidenceRating: number }): JSX.Element => {

    

 

    if (props.confidenceRating < 0 || props.confidenceRating > 100) {

        Az.fail({
            message: "Confidence rating is invalid",
            code: 300,
            details: `Hello, you passed in an invalid confidence rating: ${props.confidenceRating} which is less than 0 or greater than 100`,
            metadata: {
                confidenceRating: props.confidenceRating,
            },
            summaryItems:[
                {
                    label: "Confidence Rating",
                    value: "Invalid"
                }
            ]
        });

        
        Az.log(
            [
                {
                    timestamp: Date.now(),
                    level: Az.LogEntryLevel.Error,
                    area: `Assessment.ReactView`,
                    args: [props?.confidenceRating, "KEYFORCOMPREHENSION"],
                    message: "Confidence rating is rendered",
                    code: 300,
                }
            ]
        );

        return <div>Invalid Confidence Rating</div>;
    }
   

    const resultStarRating: number = getStarRating(props.confidenceRating);
    return (
        

        <div>
            {
                [...Array(resultStarRating)].map((_, index: number) => {
                    return (<Icon iconName="FavoriteStarFill" className={iconClass}  key={`filledStar_${index}`}/>);
                })
            }
            {
                [...Array(5 - resultStarRating)].map((_, index: number) => {
                    return (<Icon iconName="FavoriteStar" className={iconClass}  key={`emptyStar_${index}`}/>);
                })
            }
            
        </div>
    );
};


export const UserInfo = (): JSX.Element => {
    let [userName, setUserName] = React.useState("Unknown");
    let [emailID, setEmailId] = React.useState("Unknown");

    Az.getUserInfo().then((userInfo) => {
        setUserName(userInfo.givenName); 
        setEmailId(userInfo.email);
    });

    showDialog({
        title: "User Info",
        customButtonLabels: ["Take me to the page"],
        content: `Hello ${userName}, your email ID is ${emailID}`,
        kind: DialogType.Custom,

    });

    return (
        <div>
            <div> Hello {userName}</div>
            <div>Your email ID is {emailID}</div>
        </div>
    );  
}


export const getStarRating = (confidenceRating: number): number => {

    switch (true) {
        case confidenceRating <= 20:
            return 1;
        case confidenceRating <= 40:
            return 2;
        case confidenceRating <= 60:
            return 3;
        case confidenceRating <= 80:
            return 4;
        default:
            return 5;
    }
};



// export default ConfidenceRating;
import React from "react";
import styled from "styled-components";
import MiniCard from "./MiniCard";

const BigCard = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
`

const CardInteresses = (props) => {
    return (
        <BigCard>
            <MiniCard 
            link="https://www.linkedin.com/groups/121615/"
            imagem="https://media-exp1.licdn.com/dms/image/C4D07AQFK5LmvZWWTGg/group-logo_image-shrink_92x92/0/1630999696851?e=1643382000&v=beta&t=hP7EQKIqDy2G07xGP7QVbb3uHf5mGyMNqx0RMG_un3A"
            title="JavaScript"
            />
            <MiniCard 
            link="https://www.linkedin.com/company/the-linux-foundation/"
            imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQGoa6N_YKgr0A/company-logo_200_200/0/1519952440120?e=1651104000&v=beta&t=g6tlpLLyJjlvNr_ZsCjmPML_O37Zz_I4ylGhWmPs4y8"
            title="The Linux Foundation"
            />
            <MiniCard 
            link="https://www.linkedin.com/company/braziljs/"
            imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQHKAqrNccndNg/company-logo_200_200/0/1560963572512?e=1651104000&v=beta&t=uoBCGFGuBAdWLIUj5j6EPTEJDIk0w7iouOf6vIDEEWk"
            title="BrazilJS"
            />
            <MiniCard 
            link="https://www.linkedin.com/company/github/"
            imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQFY3BGhoMwEEA/company-logo_200_200/0/1626195279622?e=1651104000&v=beta&t=s1hA3Ighn4YfZtaxWCPJujdRAJPvwhe79vRsAxsmDD0"
            title="GitHub"
            />
        </BigCard>
    )
}

export default CardInteresses
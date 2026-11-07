let corPulseira = "vermelha";
let idadePaciente = Number(60);
let gestante = false;

if (corPulseira === "vermelha")
{
    alert(`Atendimentode Emergencia: Sala de Trauma IMEDIATA`)
}
else if
    (corPulseira === "amarela")
    {
        if(idadePaciente >= 60 || gestante)
        {
            alert(`Atendimento urgente: Priorida Especial        Preferencial`)
        }
    
else{
    alert(`Atendimento urgente: Fila padrão`)
}
} /* aqui eu fechei o bloco amarelo*/
else if (corPulseira === "verde")
{
    let mensagem = idadePaciente < 12 ? "Encaminhar para pediatria": "Encaminhar para a Clinica Geral" 
    console.log(mensagem)
}
else{
    alert(`codigo desconhecido`)
}
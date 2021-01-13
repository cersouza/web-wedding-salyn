const Config = {
    _id: 'xxxx',
    nomeUnico: 'evelyn-e-samuel',
    urlBackgroundImage: '../img/evelyn-e-samuel-img1.jpg',    
    urlConfirmacaoPresenca: '',
    nomesConjujes: ['Evelyn', 'Samuel'],
    event: {
        dateTime: '2021-07-10 16:00:00',
        address: 'Acampamento Recanto do Sal: Rua soldado constitucionalista, Bairro fazenda velha – Nova Odessa.',
        iframe: '<iframe className=\"rounded\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.8382380006587!2d-47.352824385377204!3d-22.80845708506187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c899d1d9c5dcd7%3A0x4401534e300daa6d!2sChacara%20Recanto%20Solar!5e0!3m2!1spt-BR!2sbr!4v1610421797745!5m2!1spt-BR!2sbr\" width=\"100%\" height=\"450\" />'
    },
    buttons: [{
        label: "Confirmar Presença",
        redirectTo: "",
        class: "light"
    }],
    pages: [{
        id: 'padrinhos',
        title: 'Padrinhos',
        template: '<h1>Padrinhos</h1>'
    }]
};

export default Config;
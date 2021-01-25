const Config = [{
    _id: 'xxxx',
    uniqueName: 'evelyn-e-samuel',
    urlBackgroundImage: '../img/evelyn-e-samuel-img1.jpg',    
    urlConfirmacaoPresenca: '',
    spousesName: ['Evelyn', 'Samuel'],
    event: {
        dateTime: '2021-07-10T16:00:00',
        address: 'Acampamento Recanto do Sal: Rua soldado constitucionalista, Bairro fazenda velha – Nova Odessa.',
        iframeAddressUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.8382380006587!2d-47.352824385377204!3d-22.80845708506187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c899d1d9c5dcd7%3A0x4401534e300daa6d!2sChacara%20Recanto%20Solar!5e0!3m2!1spt-BR!2sbr!4v1610421797745!5m2!1spt-BR!2sbr'
    },
    buttons: [{
        label: 'Confirmar Presença',
        redirectTo: '',
        targetRedirect: '_blank',
        class: 'line-white',
        filter: 'convidado'
    },{
        label: 'Manual dos Padrinhos',
        redirectTo: '#manual-padrinhos',
        targetRedirect: '',
        class: 'line-white',
        filter: ['padrinhos']
    },{
        label: 'Informações Cerimônia',
        redirectTo: '#informacoes-cerimonia',
        targetRedirect: '',
        class: 'line-white',
        filter: ''
    }],
    pages: [{
        id: 'padrinhos',
        title: 'Padrinhos',
        template: '<h1>Padrinhos</h1>'
    }]
}];

export default Config;
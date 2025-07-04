document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    const employeeName = document.getElementById('employeeName').value;
    const employeeCpf = document.getElementById('employeeCpf').value;
    const employeeRole = document.getElementById('employeeRole').value;
    const employeeBank = document.getElementById('employeeBank').value;
    const employeePix = document.getElementById('employeePix').value;
    const daysWorked = parseInt(document.getElementById('daysWorked').value);
    const internshipGrant = parseFloat(document.getElementById('internshipGrant').value);
    const transportCurrentMonth = parseFloat(document.getElementById('transportCurrentMonth').value);
    const transportPreviousMonth = parseFloat(document.getElementById('transportPreviousMonth').value);
    const paymentDate = document.getElementById('paymentDate').value;

    // Calculando o total recebido
    const totalReceived = internshipGrant + transportCurrentMonth + transportPreviousMonth;

    // Preenchendo o comprovante
    document.getElementById('receiptEmployeeName').textContent = employeeName;
    document.getElementById('receiptEmployeeCpf').textContent = employeeCpf;
    document.getElementById('receiptEmployeeRole').textContent = employeeRole;
    document.getElementById('receiptEmployeeBank').textContent = employeeBank;
    document.getElementById('receiptEmployeePix').textContent = employeePix;
    document.getElementById('receiptDaysWorked').textContent = daysWorked;
    document.getElementById('receiptInternshipGrant').textContent = internshipGrant.toFixed(2);
    document.getElementById('receiptTransportCurrentMonth').textContent = transportCurrentMonth.toFixed(2);
    document.getElementById('receiptTransportPreviousMonth').textContent = transportPreviousMonth.toFixed(2);
    document.getElementById('receiptTotalReceived').textContent = totalReceived.toFixed(2);

    // Formata a data e extrai o mês/ano para o título
    const dateObj = new Date(paymentDate + 'T00:00:00'); // Adicionado T00:00:00 para evitar problemas de fuso horário
    document.getElementById('receiptPaymentDate').textContent = dateObj.toLocaleDateString('pt-BR');

    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Mês com 2 dígitos
    const year = dateObj.getFullYear();
    document.getElementById('receiptMonthYear').textContent = `${month}/${year}`;

    document.getElementById('receipt').style.display = 'block';
});

document.getElementById('printReceipt').addEventListener('click', function() {
    window.print(); // Abre a caixa de diálogo de impressão do navegador
});
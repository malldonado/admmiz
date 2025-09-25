import React, { useState } from 'react';

const BudgetForm = () => {
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [projectAddressLine1, setProjectAddressLine1] = useState('');
  const [projectAddressNumber, setProjectAddressNumber] = useState('');
  const [projectAddressNeighborhood, setProjectAddressNeighborhood] = useState('');
  const [projectAddressCEP, setProjectAddressCEP] = useState('');
  const [projectAddressCity, setProjectAddressCity] = useState('');
  const [projectAddressState, setProjectAddressState] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [materialDescription, setMaterialDescription] = useState('');
  const [materialQuantity, setMaterialQuantity] = useState('');
  const [materialUnit, setMaterialUnit] = useState('');
  const [materialUnitCost, setMaterialUnitCost] = useState('');
  const [materialTotalCost, setMaterialTotalCost] = useState('');
  const [equipmentDescription, setEquipmentDescription] = useState('');
  const [equipmentQuantity, setEquipmentQuantity] = useState('');
  const [equipmentUnit, setEquipmentUnit] = useState('');
  const [equipmentUnitCost, setEquipmentUnitCost] = useState('');
  const [equipmentTotalCost, setEquipmentTotalCost] = useState('');
  const [laborProfession, setLaborProfession] = useState('');
  const [laborDescription, setLaborDescription] = useState('');
  const [laborHours, setLaborHours] = useState('');
  const [laborCostPerUnit, setLaborCostPerUnit] = useState('');
  const [laborTotalCost, setLaborTotalCost] = useState('');
  const [transportCost, setTransportCost] = useState('');
  const [licensesCost, setLicensesCost] = useState('');
  const [insuranceCost, setInsuranceCost] = useState('');
  const [contingencyCost, setContingencyCost] = useState('');
  const [subtotalMaterials, setSubtotalMaterials] = useState('');
  const [subtotalLabor, setSubtotalLabor] = useState('');
  const [subtotalEquipment, setSubtotalEquipment] = useState('');
  const [additionalCosts, setAdditionalCosts] = useState('');
  const [totalBudget, setTotalBudget] = useState('');
  const [taxes, setTaxes] = useState('');
  const [finalValue, setFinalValue] = useState('');
  const [budgetValidity, setBudgetValidity] = useState('');
  const [conditions, setConditions] = useState('');
  const [paymentTerms, setPaymentTerms] = useState('');
  const [guarantees, setGuarantees] = useState('');
  const [budgetStatus, setBudgetStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para processar os dados do orçamento
    console.log('Orçamento enviado:', {
      clientName,
      clientContact,
      projectAddressLine1,
      projectAddressNumber,
      projectAddressNeighborhood,
      projectAddressCEP,
      projectAddressCity,
      projectAddressState,
      projectDescription,
      materialDescription,
      materialQuantity,
      materialUnit,
      materialUnitCost,
      materialTotalCost,
      equipmentDescription,
      equipmentQuantity,
      equipmentUnit,
      equipmentUnitCost,
      equipmentTotalCost,
      laborProfession,
      laborDescription,
      laborHours,
      laborCostPerUnit,
      laborTotalCost,
      transportCost,
      licensesCost,
      insuranceCost,
      contingencyCost,
      subtotalMaterials,
      subtotalLabor,
      subtotalEquipment,
      additionalCosts,
      totalBudget,
      taxes,
      finalValue,
      budgetValidity,
      conditions,
      paymentTerms,
      guarantees,
      budgetStatus,
    });
  };

  return (
    <div className="mx-auto p-4 rounded-lg">
      <form onSubmit={handleSubmit}>
        {/* Nome do Cliente e Contato */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1" htmlFor="clientName">Nome do Cliente</label>
            <input
              type="text"
              id="clientName"
              className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
              placeholder="Nome do cliente"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="clientContact">Contato</label>
            <input
              type="text"
              id="clientContact"
              className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
              placeholder="Contato do cliente"
              value={clientContact}
              onChange={(e) => setClientContact(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Endereço do Projeto */}
        <div className="mb-4">
          <label className="block mb-1" htmlFor="projectAddress">Endereço do Projeto</label>
          <div className="grid grid-cols-3 gap-4 mb-2">
            <input
              type="text"
              id="projectAddressLine1"
              placeholder="Rua"
              className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
              value={projectAddressLine1}
              onChange={(e) => setProjectAddressLine1(e.target.value)}
              required
            />
            <input
              type="text"
              id="projectAddressNumber"
              placeholder="Número"
              className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
              value={projectAddressNumber}
              onChange={(e) => setProjectAddressNumber(e.target.value)}
              required
            />
            <input
              type="text"
              id="projectAddressNeighborhood"
              placeholder="Bairro"
              className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
              value={projectAddressNeighborhood}
              onChange={(e) => setProjectAddressNeighborhood(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <input
              type="text"
              id="projectAddressCEP"
              placeholder="CEP"
              className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
              value={projectAddressCEP}
              onChange={(e) => setProjectAddressCEP(e.target.value)}
              required
            />
            <input
              type="text"
              id="projectAddressCity"
              placeholder="Cidade"
              className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
              value={projectAddressCity}
              onChange={(e) => setProjectAddressCity(e.target.value)}
              required
            />
            <input
              type="text"
              id="projectAddressState"
              placeholder="Estado"
              className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
              value={projectAddressState}
              onChange={(e) => setProjectAddressState(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Descrição do Projeto */}
        <div className="mb-4">
          <label className="block mb-1" htmlFor="projectDescription">Descrição do Projeto</label>
          <textarea
            id="projectDescription"
            className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
            placeholder="Descrição do projeto"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            required
          />
        </div>

        {/* Materiais */}
        <h3 className="text-xl font-semibold mb-2">Materiais</h3>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="materialDescription">Descrição</label>
          <input
            type="text"
            id="materialDescription"
            placeholder="Descrição do material"
            className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
            value={materialDescription}
            onChange={(e) => setMaterialDescription(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input
            type="number"
            id="materialQuantity"
            placeholder="Quantidade"
            className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
            value={materialQuantity}
            onChange={(e) => setMaterialQuantity(e.target.value)}
          />
          <input
            type="text"
            id="materialUnit"
            placeholder="Unidade"
            className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
            value={materialUnit}
            onChange={(e) => setMaterialUnit(e.target.value)}
          />
          <input
            type="number"
            id="materialUnitCost"
            placeholder="Custo Unitário"
            className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
            value={materialUnitCost}
            onChange={(e) => setMaterialUnitCost(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="materialTotalCost">Custo Total</label>
          <input
            type="number"
            id="materialTotalCost"
            placeholder="Custo Total"
            className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
            value={materialTotalCost}
            onChange={(e) => setMaterialTotalCost(e.target.value)}
          />
        </div>

        {/* Equipamentos */}
        <h3 className="text-xl font-semibold mb-2">Equipamentos</h3>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="equipmentDescription">Descrição</label>
          <input
            type="text"
            id="equipmentDescription"
            placeholder="Descrição do equipamento"
            className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
            value={equipmentDescription}
            onChange={(e) => setEquipmentDescription(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input
            type="number"
            id="equipmentQuantity"
            placeholder="Quantidade"
            className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
            value={equipmentQuantity}
            onChange={(e) => setEquipmentQuantity(e.target.value)}
          />
          <input
            type="text"
            id="equipmentUnit"
            placeholder="Unidade"
            className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
            value={equipmentUnit}
            onChange={(e) => setEquipmentUnit(e.target.value)}
          />
          <input
            type="number"
            id="equipmentUnitCost"
            placeholder="Custo Unitário"
            className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
            value={equipmentUnitCost}
            onChange={(e) => setEquipmentUnitCost(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="equipmentTotalCost">Custo Total</label>
          <input
            type="number"
            id="equipmentTotalCost"
            placeholder="Custo Total"
            className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
            value={equipmentTotalCost}
            onChange={(e) => setEquipmentTotalCost(e.target.value)}
          />
        </div>

        {/* Mão de Obra */}
        <h3 className="text-xl font-semibold mb-2">Mão de Obra</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1" htmlFor="laborProfession">Profissão</label>
            <input
              type="text"
              id="laborProfession"
              placeholder="Profissão"
              className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
              value={laborProfession}
              onChange={(e) => setLaborProfession(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="laborDescription">Descrição</label>
            <input
              type="text"
              id="laborDescription"
              placeholder="Descrição"
              className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
              value={laborDescription}
              onChange={(e) => setLaborDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="number"
            id="laborHours"
            placeholder="Horas"
            className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
            value={laborHours}
            onChange={(e) => setLaborHours(e.target.value)}
          />
          <input
            type="number"
            id="laborCostPerUnit"
            placeholder="Custo por Hora"
            className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
            value={laborCostPerUnit}
            onChange={(e) => setLaborCostPerUnit(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="laborTotalCost">Custo Total</label>
          <input
            type="number"
            id="laborTotalCost"
            placeholder="Custo Total"
            className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
            value={laborTotalCost}
            onChange={(e) => setLaborTotalCost(e.target.value)}
          />
        </div>

        {/* Custos Adicionais */}
        <h3 className="text-xl font-semibold mb-2">Custos Adicionais</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1" htmlFor="transportCost">Custo de Transporte</label>
            <input
              type="number"
              id="transportCost"
              placeholder="Custo de Transporte"
              className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
              value={transportCost}
              onChange={(e) => setTransportCost(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="licensesCost">Custo de Licenças</label>
            <input
              type="number"
              id="licensesCost"
              placeholder="Custo de Licenças"
              className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
              value={licensesCost}
              onChange={(e) => setLicensesCost(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1" htmlFor="insuranceCost">Custo de Seguro</label>
            <input
              type="number"
              id="insuranceCost"
              placeholder="Custo de Seguro"
              className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
              value={insuranceCost}
              onChange={(e) => setInsuranceCost(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="contingencyCost">Custo de Contingência</label>
            <input
              type="number"
              id="contingencyCost"
              placeholder="Custo de Contingência"
              className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
              value={contingencyCost}
              onChange={(e) => setContingencyCost(e.target.value)}
            />
          </div>
        </div>

        {/* Subtotais e Total */}
        <h3 className="text-xl font-semibold mb-2">Subtotais e Total</h3>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input
            type="number"
            id="subtotalMaterials"
            placeholder="Subtotal Materiais"
            className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
            value={subtotalMaterials}
            onChange={(e) => setSubtotalMaterials(e.target.value)}
          />
          <input
            type="number"
            id="subtotalLabor"
            placeholder="Subtotal Mão de Obra"
            className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
            value={subtotalLabor}
            onChange={(e) => setSubtotalLabor(e.target.value)}
          />
          <input
            type="number"
            id="subtotalEquipment"
            placeholder="Subtotal Equipamentos"
            className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
            value={subtotalEquipment}
            onChange={(e) => setSubtotalEquipment(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="additionalCosts">Custos Adicionais</label>
          <input
            type="number"
            id="additionalCosts"
            placeholder="Custos Adicionais"
            className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
            value={additionalCosts}
            onChange={(e) => setAdditionalCosts(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="totalBudget">Total do Orçamento</label>
          <input
            type="number"
            id="totalBudget"
            placeholder="Total do Orçamento"
            className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
            value={totalBudget}
            onChange={(e) => setTotalBudget(e.target.value)}
          />
        </div>

        {/* Impostos e Valor Final */}
        <h3 className="text-xl font-semibold mb-2">Impostos e Valor Final</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="number"
            id="taxes"
            placeholder="Impostos"
            className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
            value={taxes}
            onChange={(e) => setTaxes(e.target.value)}
          />
          <input
            type="number"
            id="finalValue"
            placeholder="Valor Final"
            className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
            value={finalValue}
            onChange={(e) => setFinalValue(e.target.value)}
          />
        </div>

        {/* Validade e Condições */}
        <h3 className="text-xl font-semibold mb-2">Validade e Condições</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            id="budgetValidity"
            placeholder="Validade do Orçamento"
            className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
            value={budgetValidity}
            onChange={(e) => setBudgetValidity(e.target.value)}
          />
          <input
            type="text"
            id="conditions"
            placeholder="Condições"
            className="border rounded w-full py-2 px-3 outline-none focus:outline-none bg-gray-200 text-gray-700"
            value={conditions}
            onChange={(e) => setConditions(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Gerar Orçamento
        </button>
      </form>
    </div>
  );
};

export default BudgetForm;

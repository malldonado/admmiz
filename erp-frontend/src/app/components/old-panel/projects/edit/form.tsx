import React, { useState } from 'react';

const Form: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [responsible, setResponsible] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [neighborhood, setNeighborhood] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [zip, setZip] = useState<string>('');
  const [state, setState] = useState<string>('State');
  const [startDate, setStartDate] = useState<string>('');
  const [startFinished, setStartFinished] = useState<string>('');
  const [information, setInformation] = useState<string>('');
  const [totalplanned, setTotalPlanned] = useState<string>('');
  const [resources, setResources] = useState<string>('');
  const [suppliers, setSuppliers] = useState<string>('');
  const [risks, setRisks] = useState<string>('');
  const [contingency, setContingency] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, responsible, description, street, number, zip, state, startDate });
  };

  return (
    <div className="bg-white pt-6 pb-8 mb-4 flex flex-col my-2 mx-4">
      <form onSubmit={handleSubmit}>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name">
              Nome
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-1 px-4 mb-3 outline-none"
              id="grid-first-name"
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-responsible">
              Responsável
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-1 px-4 outline-none"
              id="grid-responsible"
              type="text"
              placeholder="Responsável"
              value={responsible}
              onChange={(e) => setResponsible(e.target.value)}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-description">
              Descrição
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 mb-3 h-16 outline-none"
              id="grid-description"
              placeholder="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-street">
              Rua
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-1 px-4 outline-none"
              id="grid-street"
              type="text"
              placeholder="Rua"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <div className="md:w-1/5 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-number">
              Número
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-1 px-4 outline-none"
              id="grid-number"
              type="text"
              placeholder="123"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="md:w-1/4 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-neighborhood">
              Bairro
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-1 px-4 outline-none"
              id="grid-neighborhood"
              type="text"
              placeholder="Bairro"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
            />
          </div>
          <div className="md:w-1/5 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
              CEP
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-1 px-4"
              id="grid-zip"
              type="text"
              placeholder="000000-000"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
          <div className="md:w-1/4 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
              Cidade
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-1 px-4 pr-8 rounded outline-none"
                id="grid-city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option>Americana</option>
                <option>Nova Odessa</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="md:w-1/5 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
              Estado
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-1 px-4 pr-8 rounded outline-none"
                id="grid-state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option>São Paulo</option>
                <option>Rio de Janeiro</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/4 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-start-date">
              Início
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-1 px-4"
              id="grid-start-date"
              type="date"
              placeholder="dd/mm/aaaa"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="md:w-1/4 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-start-finished">
              Término
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-1 px-4"
              id="grid-start-finished"
              type="date"
              placeholder="dd/mm/aaaa"
              value={startFinished}
              onChange={(e) => setStartFinished(e.target.value)}
            />
          </div>
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-information">
              Informações
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-1 px-4 outline-none"
              id="grid-information"
              type="text"
              placeholder="Informações"
              value={information}
              onChange={(e) => setInformation(e.target.value)}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
         <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-total-planned">
              Total Planejado
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-1 px-4 outline-none"
              id="grid-total-planned"
              type="text"
              placeholder="R$ 0,00"
              value={totalplanned}
              onChange={(e) => setTotalPlanned(e.target.value)}
            />
          </div>
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-resources">
              Recursos Alocados
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-1 px-4 outline-none"
              id="grid-resources"
              type="text"
              placeholder="R$ 0,00"
              value={resources}
              onChange={(e) => setResources(e.target.value)}
            />
          </div>
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-suppliers">
            Fornecedores
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-1 px-4 outline-none"
              id="grid-suppliers"
              type="text"
              placeholder="R$ 0,00"
              value={suppliers}
              onChange={(e) => setSuppliers(e.target.value)}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-risks">
              Principais Riscos Identificados
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 mb-3 h-16 outline-none"
              id="grid-risks"
              placeholder="Principais Riscos Identificados"
              value={risks}
              onChange={(e) => setRisks(e.target.value)}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-contingency">
            Plano de Contingência
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 mb-3 h-16 outline-none"
              id="grid-contingency"
              placeholder="Plano de Contingência"
              value={contingency}
              onChange={(e) => setContingency(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

export default Form;

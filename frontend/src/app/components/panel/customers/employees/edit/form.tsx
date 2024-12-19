import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";

const Form: React.FC = () => {
  const [typeClient, setTypeClient] = useState<string>("");
  const [situation, setSituation] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [cellphone, setCellphone] = useState<string>("");
  const [site, setSite] = useState<string>("");
  const [responsibleSeller, setResponsibleSeller] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [typeAddress, setTypeAddress] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [complement, setComplement] = useState<string>("");
  const [neighborhood, setNeighborhood] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [limitCredit, setLimitCredit] = useState<string>("");
  const [observation, setObservation] = useState<string>("");
  const [typeContat, setTypeContat] = useState("");
  const [nameContat, setNameContat] = useState("");
  const [newContat, setNewContat] = useState("");
  const [responsibility, setResponsibility] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white pt-6 pb-8 mb-4 flex flex-col my-2 mx-4">
      <form onSubmit={handleSubmit}>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Tipo de cliente
            </label>
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-1 px-4 pr-8  outline-none"
              value={typeClient}
              onChange={(e) => setTypeClient(e.target.value)}
            >
              <option>Pessoa física</option>
              <option>Pessoa jurídica</option>
              <option>Estrangeiro</option>
            </select>
          </div>
          <div className="md:w-1/3 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Situação
            </label>
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-1 px-4 pr-8  outline-none"
              value={situation}
              onChange={(e) => setSituation(e.target.value)}
            >
              <option>Ativado</option>
              <option>Desativado</option>
            </select>
          </div>
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Nome
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 py-1 px-4 outline-none"
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/4 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 py-1 px-4 outline-none"
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="md:w-1/4 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Telefone
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 py-1 px-4 outline-none"
              type="text"
              placeholder="Telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="md:w-1/4 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Telefone celular
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 py-1 px-4 outline-none"
              type="text"
              placeholder="Telefone celular"
              value={cellphone}
              onChange={(e) => setCellphone(e.target.value)}
            />
          </div>
          <div className="md:w-1/4 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Site
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 py-1 px-4 outline-none"
              type="text"
              placeholder="Site"
              value={site}
              onChange={(e) => setSite(e.target.value)}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/4 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Vendendor / Responsável
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 py-1 px-4 outline-none"
              type="text"
              placeholder="Vendendor / Responsável"
              value={responsibleSeller}
              onChange={(e) => setResponsibleSeller(e.target.value)}
            />
          </div>
          <div className="md:w-1/4 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Tipo de endereço
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 py-1 px-4 outline-none"
              type="text"
              placeholder="Tipo de endereço"
              value={typeAddress}
              onChange={(e) => setTypeAddress(e.target.value)}
            />
          </div>
          <div className="md:w-1/4 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              CEP
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 py-1 px-4 outline-none"
              type="text"
              placeholder="CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
          </div>
          <div className="md:w-1/4 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Logradouro
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 py-1 px-4 outline-none"
              type="text"
              placeholder="Logradouro"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/5 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Número
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 py-1 px-4 outline-none"
              type="text"
              placeholder="Número"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="md:w-1/5 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Complemento
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 py-1 px-4 outline-none"
              type="text"
              placeholder="Complemento"
              value={complement}
              onChange={(e) => setComplement(e.target.value)}
            />
          </div>
          <div className="md:w-1/5 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Bairro
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 py-1 px-4 outline-none"
              type="text"
              placeholder="Bairro"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
            />
          </div>
          <div className="md:w-1/5 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Cidade
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 py-1 px-4 outline-none"
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="md:w-1/5 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Estado
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 py-1 px-4 outline-none"
              type="text"
              placeholder="Estado"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
        </div>
        {/* <div className="-mx-3 md:flex mb-6"> */}
        {/* <div className="md:w-1/4 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Tipo de contato
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 py-1 px-4 outline-none"
            type="text"
            placeholder="Tipo de contato"
            value={typeContat}
            onChange={(e) => setTypeContat(e.target.value)}
          />
        </div>
        <div className="md:w-1/4 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Nome
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 py-1 px-4 outline-none"
            type="text"
            placeholder="Nome"
            value={nameContat}
            onChange={(e) => setNameContat(e.target.value)}
          />
        </div>
        <div className="md:w-1/4 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Contato
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 py-1 px-4 outline-none"
            type="text"
            placeholder="Contato"
            value={newContat}
            onChange={(e) => setNewContat(e.target.value)}
          />
        </div>
        <div className="md:w-1/4 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Cargo
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 py-1 px-4 outline-none"
            type="text"
            placeholder="Cargo"
            value={responsibility}
            onChange={(e) => setResponsibility(e.target.value)}
          />
        </div> */}
      {/* </div> */}
        {/* <button className="px-2 mb-6 bg-[#315bd4] text-white font-bold w-[200px] h-[40px] flex justify-start items-center">
            <FiPlusCircle className='mr-2 text-xl'/>
            <span>Inserir novo contato</span>
        </button> */}
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Observação
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 py-1 px-4 outline-none"
              type="text"
              placeholder="Observação"
              value={observation}
              onChange={(e) => setObservation(e.target.value)}
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Limite de crédito
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 py-1 px-4 outline-none"
              type="text"
              placeholder="Limite de crédito"
              value={limitCredit}
              onChange={(e) => setLimitCredit(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 "
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

export default Form;
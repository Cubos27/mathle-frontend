import { useState, useRef } from 'react'

export default function useSearchBar() {
  const [search, setSearch] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if ( search.trim().length === 0 ) {
      e.preventDefault();
    }

    if ( search.trim().length > 0 ) {
      e.preventDefault();
      alert(`Search: ${search}`);
    }
  }

  const onClearForm = (e : React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    formRef.current?.reset();
  }

  return {
    search,
    formRef,
    onSearchChange,
    handleSubmit,
    onClearForm
  }
}

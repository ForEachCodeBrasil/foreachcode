<x-mail::message>
# Novo Contato - ForEachCode

**Nome:** {{ $data['name'] }}

**Email:** {{ $data['email'] }}

**Serviço:** {{ $data['service'] }}

@if(isset($data['company']))
**Empresa:** {{ $data['company'] }}
@endif

@if(isset($data['budget']))
**Orçamento:** {{ $data['budget'] }}
@endif

@if(isset($data['locale']))
**Idioma:** {{ strtoupper($data['locale']) }}
@endif

**Mensagem:**
{{ $data['message'] }}

---

Recebido em: {{ now()->format('d/m/Y H:i:s') }}

</x-mail::message>

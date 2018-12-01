export class NuevoUsuario {
    constructor(
        public UserName: string,
        public Nombre: string,
        public Password: string,
        public IdPatio: number,
        public Empresa: string,
        public LogoEmpresa: string,
        public Email: string,
        public Foto: string,
        public AccesoSimultaneo: boolean,
        public PermitirLogeoExterno: boolean,
        public VerDemo: boolean,
        public Sonidos: boolean,
        public IdVoiceTextToSpeech: number,
        public Activo: boolean,
        public IdCliente: number,
        public IdOperacion: number,
        public IdProyecto: number,
        public IPS_Permitidas: string,
        public HorarioAcceso: string,
        public EnteradoUltimosCambios: boolean
    ) { }
}

export class Usuario {
    constructor(
        public idUsuario: number,
        public UserName: string,
        public Nombre: string,
        public IdPatio: number,
        public Empresa: string,
        public LogoEmpresa: string,
        public Email: string,
        public Foto: string,
        public AccesoSimultaneo: boolean,
        public PermitirLogeoExterno: boolean,
        public VerDemo: boolean,
        public Sonidos: boolean,
        public IdVoiceTextToSpeech: number,
        public Activo: boolean,
        public IdCliente: number,
        public IdOperacion: number,
        public IdProyecto: number,
        public IPS_Permitidas: string,
        public HorarioAcceso: string,
        public EnteradoUltimosCambios: boolean
    ) { }
}

export class PermisosUsuario {
    constructor(
        public IdUsuario: number,
        public JsonGrupos: string,
        public JsonPermisos: string
    ) { }
}

export class PermisosGrupo {
    constructor(
        public IdGrupo: number,
        public JsonPermisos: string
    ) { }
}

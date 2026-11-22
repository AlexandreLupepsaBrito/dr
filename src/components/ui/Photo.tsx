import { useState } from 'react'
import { ImageIcon } from 'lucide-react'

/**
 * FOTOGRAFIAS
 * ---------------------------------------------------------------
 * Todas as imagens do site ficam em /public/images/.
 * Para substituir um placeholder, basta salvar a fotografia com o MESMO nome
 * de arquivo indicado na prop `file` (ex.: hero-medica.jpg). Não é preciso
 * alterar nenhum código: se o arquivo existir, a foto aparece; se não existir,
 * é exibido um espaço reservado neutro com o nome do arquivo esperado.
 */

interface PhotoProps {
  /** Nome do arquivo dentro de /public/images */
  file: string
  alt: string
  /** Proporção CSS, ex.: '4 / 5', '16 / 10' */
  ratio?: string
  /** Texto curto exibido no placeholder (ex.: "Foto principal da médica") */
  label?: string
  /** true para imagens da primeira dobra (sem lazy loading) */
  priority?: boolean
  className?: string
  imgClassName?: string
  sizes?: string
}

export function Photo({
  file,
  alt,
  ratio = '4 / 5',
  label,
  priority = false,
  className = '',
  imgClassName = '',
  sizes,
}: PhotoProps) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className={`relative overflow-hidden bg-sand-100 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {!failed && (
        <img
          src={`/images/${file}`}
          alt={alt}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      )}

      {(failed || !loaded) && (
        <div
          role={failed ? 'img' : undefined}
          aria-label={failed ? alt : undefined}
          aria-hidden={failed ? undefined : true}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-sand-50 via-sand-100 to-sand-200 p-6 text-center"
        >
          {/* moldura fina interna */}
          <span className="pointer-events-none absolute inset-3 rounded-[inherit] border border-white/70" />
          {failed && (
            <>
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-taupe/30 bg-ivory/70 text-taupe">
                <ImageIcon size={18} strokeWidth={1.4} />
              </span>
              <span className="max-w-[16rem] text-[0.7rem] font-medium tracking-[0.18em] text-taupe uppercase">
                {label ?? 'Espaço para fotografia'}
              </span>
              <span className="font-mono text-[0.65rem] text-taupe/80">/images/{file}</span>
            </>
          )}
        </div>
      )}
    </div>
  )
}
